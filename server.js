import mongoose from "mongoose/index.js";
import { app } from "./app.js";
// import { DB_HOST } from "./config.js";
export const DB_HOST = "mongodb+srv://Admin:^zMqPmtDN9V8HWS1yn@cluster0.egbthzb.mongodb.net/contacts_reader?retryWrites=true&w=majority";

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
