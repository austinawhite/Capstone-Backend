import db from "../client.js";

//get all experiences for a trip 

export async function getTripExperiences () {
    const sql = `
    SELECT * FROM  WHERE trip_id = $1`
    const {rows: trip_experiences} = await db.query(sql, [trip_id])
    return trip_experiences;
}


//get a specific experience for a trip 

export async function getExperience(id) {
    const sql = `
    SELECT * FROM trip_experiences WHERE id = $1`
    const {rows: trip_experiences} = await db.query (sql, [id])
    return trip_experiences;
    
}


//add an experience to a trip 

export async function addExperienceToTrip ({trip_id, trip_experience, experience_date}) {
    const sql = `
    INSERT INTO trip_experiences (trip_id, trip_experience, experience_date)
    VALUES ($1, $2, $3)
    RETURNING *`; 

    const {rows} = await db.query(sql, [trip_id, experience_id, experience_date]);
    return rows[0];
}


//remove an experience from a trip 

export async function removeTripExperience (id) {
    const sql = `
    DELETE from trip_experiences WHERE id = $1
    RETURNING *`;

    const {rows} = await db.query (sql, [id]);
    return rows [0];
}


//edit the dates for a trip experience 

export async function editExperience (id, experience_date) {
    const sql = `
    UPDATE trip_experiences SET experience_date = $2 WHERE id = $1
    RETURNING *`;

    const {rows} = await db.query (sql, [id, experience_date]);
    return rows [0];


}