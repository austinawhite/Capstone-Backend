import express from "express";
const router = express.Router();
export default router;
import { getCities, getCity } from "../db/queries/cities";

// GET all Cities
router.route("/").get(async(req, res)=>{
    const cities = await getCities();

    res.send(cities);
});

