import Question from "./Question.js";
import { executeQuery } from "../evaluateQuery/evaluateQuery.js";
import { deleteAllTestCases } from "./testCaseUtils.js";

export const createQuestion = async(ques,userId)=>{
  try{
    const compileResult = await executeQuery(userId,ques.solutionQuery,ques.schemas);
    if(!compileResult.valid){
      return null;
    }
    const res = await Question.insertOne(ques);
    return res;
  }catch(err){
    console.log(err);
  }
}

export const getQuestion = async(id)=>{
  try{
    const res = await Question.findOne({
      _id: id
    });
    console.log(res);
    return res;
  }catch(err){
    console.log(err);
  }
}

export const getAllQuestions = async()=>{
  try{
    const res = await Question.find();
    console.log(res);
    return res;
  }catch(err){
    console.log(err);
  }
}

export const editQuestion = async(id,question)=>{
  try{
    const userId = '686a74dbac80870e226ec5ea';
    const compileResult = await executeQuery(userId,ques.solutionQuery,ques.schemas);
    if(!compileResult.valid){
      return null;
    }
    const res = await Question.findByIdAndUpdate(id,{
      $set: {
        ...question
      }
    })
    return res;
  }catch(err){
    console.log(err);
  }
}

export const deleteQuestion = async(id)=>{
  try{
    const res = await Question.findOneAndDelete({
      _id: id
    });
    const res2 = await deleteAllTestCases(id);
    if(res&&res2){
      return res;
    }
    return false;
  }catch(err){
    console.log(err);
  }
}