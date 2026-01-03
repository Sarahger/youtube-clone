import connectToMongoDB from "./db/index.js";
import express from "express";
import dotenv from "dotenv";

dotenv.config({
    path: './.env'
});

const app = express();

connectToMongoDB();

app.listen(process.env.PORT, console.log("Server is running on port", process.env.PORT));