import db from "../client.js";

// returns the info created according to the provided details

export async function createUser({ email, password}) {
    const sql = `
    INSERT INTO users (email, password)
    VALUES ($1, $2)
    RETURNING *;
    `;
    const {rows: user} = await db.query(sql, [email, password]);
    return user[0];
};

// login User
export async function loginUser({email}){
    const sql = `
    SELECT * FROM users WHERE email = $1
    `;
    const {rows: user} = await db.query(sql, [email]);
    return user[0];
};

// getUserById
export async function getUserById(id){
    const sql = `
    SELECT * FROM users WHERE id = $1;
    `;
    const {rows: user} = await db.query(sql, [id]);
    return user;
};

// getUserInfo

export async function getUserInfo({email}){
    const sql = `
    SELECT id FROM users WHERE email = $1;
    `;
    const {rows: user} = await db.query(sql, [email]);
    return user[0]

}