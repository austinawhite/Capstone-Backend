import express from "express";
const router = express.Router();
export default router;
import { getExperiences, getExperiencesByCityCat, getExperiencesByCity } from "../db/queries/experiences.js";

// GET all experiences 

router.route("/").get(async(req,res)=>{
    const experiences = await getExperiences();
    res.send(experiences);
});

// GET all experience for a city 

router.route("/:city").get(async(req, res)=>{
    const experience_city = req.params.city;

       if(isNaN(experience_city) || experience_city < 0){
            return res.status(400).send(`Please use a valid city id.`);}
    
        const experiences = await getExperiencesByCity(parseInt(experience_city));
    
        if(!experiences || experiences.length ===0){
            return res.status(404).json(`No experiences found for this city`)
        };
    
        res.send(experiences);

});


// GET all experience for a specific city and category 

router.route("/:city/:category").get(async(req, res)=>{
    const experience_city = parseInt(req.params.city);
    const experience_category = parseInt(req.params.category);

    if(isNaN(experience_city) || experience_city < 0){
        return res.status(400).send('Please use a valid city ID');
    }

    if(isNaN(experience_category) || experience_category < 1){
        return res.status(400).send('Please use a valid category ID');
    }

    const experiences = await getExperiencesByCityCat(experience_city, experience_category);

    if (!experiences || experiences.length===0){
        return res.status(404).json(`There are no experiences in this category for ${experience_city}`)
    }

    res.send(experiences);
});