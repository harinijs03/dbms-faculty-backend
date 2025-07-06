import { createQuestion,getQuestion,editQuestion, getAllQuestions, deleteQuestion } from "../models/questionUtils.js";
import { executeQuery } from "../evaluateQuery/evaluateQuery.js";

export async function createQuestionController(req,res){
  try{
    const {quesDesc,userId} = req.body;
    console.log(quesDesc);
    const result = await createQuestion(quesDesc, userId);
    if(result){
      res.json({msg: true, id: result._id});
    }else{
      res.json({msg: false});
    }
  }catch(err){
    console.log(err);
  }
} 

export async function getQuestionController(req,res){
  try{
    const id = req.params.id;
    const result = await getQuestion(id);
    if(result){
      res.json({msg: true, question: result});
    }
  }catch(err){
    console.log(err);
  }
}

export async function editQuestionController(req,res){
  try{
    const id = req.params.id;
    const result = await editQuestion(id,req.body);
    if(result){
      res.json({msg: true});
    }
  }catch(err){
    console.log(err);
  }
}

export async function getAllQuestionsController(req,res){
  try{
    const result = await getAllQuestions();
    if(result){
      res.json({msg: true, result: result});
    }
  }catch(err){
    console.log(err);
  }
}

export async function deleteQuestionController(req,res) {
  const id = req.params.id;
  try{
    const result = await deleteQuestion(id);
    if(result){
      res.json({msg: true});
    }
  }catch(err){
    console.log(err);
  }
}

export async function runQuery(req,res) {
  try{
    const {code, schemas, userId} = req.body;
    const result = await executeQuery(userId, code, schemas);
    res.json({msg:true, result: result});
  }catch(err){
    console.log(err);
    res.setHeader(400).json({msg: false, err: err});
  }
}