import db from "../client.js";

//create category
export async function createCategory({category_name}) {
    const sql =`
    INSERT INTO experience_category (category_name)
    VALUES ($1)
    RETURNING *;
    `;
    const {rows:categories} = await db.query(sql, [category_name]);
    return categories[0];
    
}


//get all categories 


//get category by ID 