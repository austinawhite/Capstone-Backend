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

// get all experiences 
export async function getExperiences(){
    const sql = `
    SELECT * FROM experiences;`;
    const {rows: experiences} = await db.query(sql)
    return experiences;
}


// get experiences for a city, this will display the experiences within a specific category for the city 
export async function getExperiencesByCity(experience_city){
    const sql = `
    SELECT * FROM experiences WHERE experience_city = $1 AND experience_category = $2`;

    const {rows: experiences} = await db.query(sql, [experience_city])
    return experiences;
}

// get all experiences for a city, in a specific category 
export async function getExperiencesByCityCat(experience_city, experience_category){
    const sql = `
    SELECT * FROM experiences WHERE experience_city = $1 AND experience_category = $2`;
    const {rows: experiences} = await db.query(sql, [experience_city, experience_category])
    return experiences;
}