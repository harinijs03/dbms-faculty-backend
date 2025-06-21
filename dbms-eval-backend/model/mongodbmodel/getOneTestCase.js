import TestCaseSchema from "./TestCaseSchema.js";
import mongoose from "mongoose";

export async function getOneTestCase(id){
  try{
    const objectId = mongoose.Types.ObjectId.createFromHexString(id);
    const docs = await TestCaseSchema.findById(objectId);
    return docs;
  }catch(err){
    console.log(err);
  }
}