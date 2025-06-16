import {createQuestion} from '../model/mongodbmodel/createQuestion.js'
import {getOneQuestion, getQuestion} from '../model/mongodbmodel/getQuestion.js'
import { deleteQuestion } from '../model/mongodbmodel/deleteQuestion.js';

export async function createQuestionContoller(req,res){
  console.log(req.body, "controller");
    try {
        await createQuestion(req.body);
        res.json({msg: true});
    } catch(err) {
        console.log(err.message);
    }
}

export async function getQuestionController(req,res){
  try{
    const ques = await getQuestion();
    console.log(ques);
    res.json(ques); 
  }catch(err){
    console.log(err);
  }
}

export async function getOneQuestionController(req,res){
  const id = req.params.id;
  try{
    const ques = await getOneQuestion(id);
    console.log(ques);
    res.json(ques);
  }
  catch(err){
    console.log(err);
  }
}

export async function deleteQuestionContoller(req,res){
  const id = req.params.id;
  try{
    const result = await deleteQuestion(id);
    console.log(id);
    if(result){
      res.json({msg: true});
    }
  }catch(err){
    res.status(404).json({msg: false});
    console.log(err);
  }
}