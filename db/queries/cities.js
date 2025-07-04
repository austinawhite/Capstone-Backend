import db from "../client.js";


// Get all Cities 
export async function getCities(){
        const sql = `
        SELECT * FROM cities;
        `;
        const {rows: cities} = await db.query(sql)
        return cities
}

// Get Cities by ID
export async function getCity(id){
        const sql = `
        SELECT * FROM cities WHERE id = $1;
        `
        const {rows: city} = await db.query(sql, [id])
        return city[0];
}

// returns the entry created according to the provided details
export async function createCity ({city_name, city_description, city_image }) {
        const sql = `
        INSERT INTO cities (city_name, city_description, city_image )
        VALUES ($1, $2, $3)
        RETURNING *;
        `;
        const {rows: city } = await db.query(sql, [city_name, city_description, city_image]);
        return city[0];
}