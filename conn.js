import "dotenv/config"
import mongoose from "mongoose";

export async function connectDB() {
  try {
    await mongoose.connect(process.env.ATLAS_URI);
    console.log("Database Connected");
  } catch (error) {
    console.log(error);
  }
}
