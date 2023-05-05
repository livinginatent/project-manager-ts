import mongoose from "mongoose";
import "dotenv/config";

const URI: string | undefined = process.env.MONGO_URI;

const connectDB = async (): Promise<void> => {
  try {
    await mongoose.connect(URI!);
    console.log("DB Connected");
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
