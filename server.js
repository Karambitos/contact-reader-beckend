// import mongoose from "mongoose/index.js";
import { app } from "./app.js";

// const DB_HOST = "mongodb+srv://Admin:^zMqPmtDN9V8HWS1yn@cluster0.egbthzb.mongodb.net/contacts_reader?retryWrites=true&w=majority";

// mongoose.connect(DB_HOST)
//     .then(() => {
//         console.log("Database connection successful")
//         app.listen(3001, () => {
//             console.log("Server is running. Use our API on port: 3001");
//         });
//     })
//     .catch(error => {
//         console.log(error.message)
//         process.exit(1)
//     });

app.listen(3001, () => {
    console.log("Server is running. Use our API on port: 3001");
});