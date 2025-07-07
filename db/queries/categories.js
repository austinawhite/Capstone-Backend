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

export async function getCategories(){
    const sql = `
    SELECT * FROM experience_category;
    `;
    const {rows: categories} = await db.query(sql)
    return categories;
}


//get category by ID 

export async function getCategory(id){
    const sql = `
    SELECT * FROM experience_category WHERE id = $1;`
    const {rows:category} = await db.query(sql, [id])
    return category[0];
}