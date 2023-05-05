import express from "express";
import cors from "cors";
import connectDB from "../config/db";


const app = express();
connectDB()
const PORT = process.env.PORT
app.use(cors())

app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));