import express from "express";

import cors from "cors";
import citiesRouter from "./api/cities.js";
import categoriesRouter from "./api/categories.js";
import experiencesRouter from "./api/experiences.js";
import usersRouter from "./api/users.js";
import tripsRouter from "./api/trips.js"; 
import reviewRoutes from "./api/reviews.js";



const app = express();

app.use(cors());
app.use(express.json());

app.use("/cities", citiesRouter);
app.use("/categories", categoriesRouter);
app.use("/experiences", experiencesRouter);
app.use("/users", usersRouter);
app.use('/trips', tripsRouter);
app.use("/api/reviews", reviewRoutes);

app.use((err, req, res, next)=>{
    console.error(err);
    res.status(500).json(`Sorry! Something went wrong!`)
});

export default app;