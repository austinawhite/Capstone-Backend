import db from "../client.js";

// Get all trips for a user 

export async function getTrips () {
    const sql = `
    SELECT * FROM trips;`
    const {rows: trips} = await db.query(sql)
    return trips;
}


// Get trip by ID 

export async function getTrip () {
    const sql = `
    SELECT * FROM trips WHERE id = $1`
    const {rows: trip} = await db.query(sql, [id])
    return trip; 
}

// Create a trip 

export async function createTrip ({user_id, trip_city, trip_date, end_date, }) {
    const { rows: [trips] } = await db.query (`
        INSERT INTO trips (user_id, trip_city, trip_date, end_date)
        VALUES ($1, $2, $3, $4)
        RETURNING *;`,
        [user_id, trip_city, trip_date, end_date]);
        return trip;
}



// Delete a trip 
export async function deleteTrip(id) {
    const { rows: [deleted] } = await db.query(`
        DELETE FROM trips WHERE id = $1 RETURNING *;`,
    [id]);
    return deleted;
}