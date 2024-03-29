import express from "express";
import morgan from "morgan";
import cors from "cors";
import dotenv from 'dotenv';
import contactsRouter from "./routes/api/contactsRouter.js";

dotenv.config();
export const app = express();

app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());

app.use("/api/contacts", contactsRouter, (req, res) => {});

app.use((_, res) => {
  res.status(404).json({ message: "Route not found" });
});

app.use((err, req, res) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});


