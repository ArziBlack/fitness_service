import mongoose from "mongoose";
import Color from "colors";

const MONGO_URI_LOCAL_DB = `mongodb://127.0.0.1:27017/fitness`
const MONGO_URI = `mongodb+srv://Blackdice:Black177@cluster0.1gxkqc6.mongodb.net/Fitness?retryWrites=true&w=majority&appName=Cluster0`
// const MONGO_URI_ = `mongodb+srv://Blackdice:Black177@cluster0.1gxkqc6.mongodb.net/BTCPAY?retryWrites=true&w=majority`
export const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI_LOCAL_DB as string);
    console.log(Color.underline.bgGreen(`MongoDB Database connected`));
    
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}