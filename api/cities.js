import express from "express";
const router = express.Router();
export default router;
import { getCities, getCity } from "../db/queries/cities";

// GET all Cities
router.route("/").get(async(req, res)=>{
    const cities = await getCities();

    res.send(cities);
});

// GET cities/:ID
router.route("/:id").get(async(req, res)=>{
    const id = req.params.id;

    if(isNaN(id) || id < 0){
        return res.status(400).send(`Please use a valid number for the ID.`)
    };

    const city = await getCity(id);

    if(!city){
        return res.status(404).json(`City not found.`)
    };

    res.send(city);
});