import dotenv from "dotenv";
dotenv.config();

console.log("DATABASE_URL:", process.env.DATABASE_URL);

import app from "./app.js";
import db from "./db/client.js";

const PORT = process.env.PORT ?? 3000;

await db.connect();

app.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}...`);
});
