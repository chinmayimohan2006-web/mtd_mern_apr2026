import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.TRAINER_APP_PORT || 5000;
const MONGO_URI = process.env.TRAINER_MONGO_URI || " ";

// connect to MongoDB
mongoose
  .connect(MONGO_URI)
  .then(() => console.log("MongoDB connected "))
  .catch((err) => console.log(err));

// test route
app.get("/", (req, res) => {
  res.send("Server is running 🚀");
});

// start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});