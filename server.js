import mongoose from "mongoose/index.js";
import { app } from "./app.js";
import dotenv from 'dotenv';

dotenv.config();

const { DB_HOST } = process.env;

mongoose.connect(DB_HOST)
    .then(() => {
        console.log("Database connection successful")
        app.listen(3000, () => {
            console.log("Server is running. Use our API on port: 3000");
        });
    })
    .catch(error => {
        console.log(error.message)
        process.exit(1)
    });
