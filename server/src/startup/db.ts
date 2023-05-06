import mongoose from "mongoose";
import "dotenv/config";
import winston from "winston";

const db = process.env.MONGO_URI || "mongodb://localhost:27017/test";

export const initDB = async () => {
  mongoose
    .connect(db!)
    .then(() => winston.info('Connected to DB'))
    .catch((error) => winston.error(error));
};
