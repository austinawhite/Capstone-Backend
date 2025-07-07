import express from "express";
const router = express.Router();
export default router;
import { getCategories, getCategory } from "../db/queries/categories.js";

//GET all categories 
router.route("/").get(async(req,res)=>{
    const categories = await getCategories();

    res.send(categories);
});


//GET category by ID 

router.route("/:id").get(async(req,res)=>{
    const id = req.params.id;

    if(isNaN(id) || id < 0){
            return res.status(400).send(`Please use a valid number for the ID.`)
        };
    
        const category = await getCategory(id);
    
        if(!category){
            return res.status(404).json(`Category not found.`)
        };
    
        res.send(category);
    });