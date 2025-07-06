import mongoose from "mongoose";
import * as dotenv from 'dotenv-flow'
dotenv.config();

const connectMongoDB = async()=>{
  try{
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Mongodb connected');
  }catch(err){
    console.log(err);
  }
}

export default connectMongoDB;