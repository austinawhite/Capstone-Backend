import db from "../client.js";

//create experience
export async function createExperiences({experience_name, experience_description, experience_picture, experience_city, experience_category}) {
    const sql =`
    INSERT INTO experiences (experience_name, experience_description, experience_picture, experience_city, experience_category)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *;
    `;
    const {rows:experiences} = await db.query(sql, [experience_name, experience_description, experience_picture, experience_city, experience_category]);
    return experiences[0];
    
}