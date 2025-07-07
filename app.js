import express from "express";
const app = express();
export default app;
import cors from "cors";
import citiesRouter from "./api/cities.js";
import categoriesRouter from "./api/categories.js";


app.use(cors());
app.use(express.json());

app.use("/cities", citiesRouter);
app.use("/categories", categoriesRouter);

app.use((err, req, res, next)=>{
    console.error(err);
    res.status(500).json(`Sorry! Something went wrong!`)
});