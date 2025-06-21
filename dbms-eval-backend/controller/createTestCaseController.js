import { insertTestCase } from "../model/mongodbmodel/insertTestCase.js";
import { getTestCases } from "../model/mongodbmodel/getTestCases.js";
import { deleteTestCase } from "../model/mongodbmodel/deleteTestCase.js";
import { getOneTestCase } from "../model/mongodbmodel/getOneTestCase.js";

export async function addTestCaseController(req,res){
  try{
    const {questionId,input,output,hidden} = req.body;
    const msg = await insertTestCase({questionId,input,output,hidden});
    if(msg){
      res.json({msg: true});
    }else{
      res.json({msg: false});
    }
  }catch(err){
    console.log(err);
  }
}

export async function getTestCaseController(req,res){
  try{
    const id = req.params.id;
    const docs = await getTestCases(id);
    res.json(docs);
  }catch(err){
    console.log(err);
  }
}

export async function getOneTestCaseController(req,res){
  try{
    const id = req.params.id;
    const docs = await getOneTestCase(id);
    res.json(docs);
  }catch(err){
    console.log(err);
  }
}

export async function deleteTestCaseController(req,res){
  try{
    const id = req.params.id;
    const docs = await deleteTestCase(id);
    if(docs){
      res.json({msg: true});
    }else{
      res.json({msg: false});
    }
  }catch(err){
    console.log(err);
  }
}