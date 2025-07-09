import express from "express";
const router = express.Router();
export default router;
import db from "#db/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { createUser, getUsers, getUserById, getUserInfo } from "../db/queries/users.js";
import { verifyToken } from "../middleware.js";

router.route("/").get(async (req, res) => {
    const users = await getUsers();
    res.send(users);
});


router.post('/register', async (req, res) => {
  const {email, password} = req.body;
  if (!email || !password) {
    return res.status(400).send(`Missing email address or password`);
  }
  try{
    const hashedPassword = await bcrypt.hash(password, 5)
    const result = await db.query(`INSERT INTO users (email, password)
      VALUES ($1, $2) RETURNING *;`, [email, hashedPassword]);
      const newUser = result.rows[0]
      if(!newUser) return res.status(401).send(`Can not create a new user`);
      const token = jwt.sign({id: newUser.id, email: newUser.email}, process.env.JWT_SECRET);
      res.status(201).json(token)
  }catch(error){
    console.log(error)
    res.send('Error registering')
  }
})

router.post('/login', async(req,res,next) => {
  const {email, password} = req.body;
  if (!email || !password) {
    return res.status(400).json(`Missing email or password`);
  }

  try {
    const result = await db.query(`SELECT * FROM users WHERE email = $1;`, [email]); 
    const realUserInfo = result.rows[0]

    const isPWMatch = await bcrypt.compare(password, realUserInfo.password);
    if(!isPWMatch) return res.status(401).json('Not authorized');

    const token = jwt.sign({id: realUserInfo.id, email: realUserInfo.email},process.env.JWT_SECRET);
    res.status(200).json( {success:  true ,token});

  }catch(error){
    console.log('Could not log in',error)
    res.status(500).json({success: false, message: 'Login failed'});
  }
})

router.route("/user").get(verifyToken, async(req,res)=>{
const user = await getUserById(req.user.id)
res.status(200).send(user)

})