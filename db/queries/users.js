import db from "../client.js";
import bcrypt from "bcrypt";

// returns the info created according to the provided details

export async function createUser({ email, password}) {
    const sql = `
    INSERT INTO users (email, password)
    VALUES ($1, $2)
    RETURNING *;
    `;
    const hashedPassword = await bcrypt.hash(password, 5);
    const {rows: user} = await db.query(sql, [email, password]);
    return user[0];
};

// getUsers
export async function getUsers(){
    const sql = `
    SELECT * FROM users
    `;
    const {rows: user} = await db.query(sql);
    return user;
};

// getUserById
export async function getUserById(id){
    const sql = `
    SELECT * FROM users WHERE id = $1;
    `;
    const {rows: user} = await db.query(sql, [id]);
    return user;
};

// getUserInfo by Email 

export async function getUserInfo({email}){
    const sql = `
    SELECT id FROM users WHERE email = $1;
    `;
    const {rows: user} = await db.query(sql, [email]);
    return user[0]

}