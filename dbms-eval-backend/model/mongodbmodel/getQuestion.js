import Question from '../mongodbmodel/QuestionSchema.js'
import mongoose from 'mongoose'

export async function getQuestion(){
  try{
    const docs = await Question.find();
    return docs;
  }
  catch(err){
    console.log(err);
  }
}

export async function getSchema(id){
  try{
    const docs = await Question.findOne({
      _id: id
    },{
      schemas: 1
    });
    return docs;
  }catch(err){
    console.log(err);
  }
}

export async function getOneQuestion(id){
  try{
    const objectId = mongoose.Types.ObjectId.createFromHexString(id);
    const docs = await Question.findById(objectId);
    return docs;
  }catch(err){
    console.log(err);
  }
}