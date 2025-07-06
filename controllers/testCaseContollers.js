import { evaluateDML } from "../evaluateQuery/evaluateDML.js";
import { evaluatePLSQL} from '../evaluateQuery/evaluatePLSQL.js'
import { addTestCase, deleteTestCase, editTestCase, getTestCase } from "../models/testCaseUtils.js";
import { getAllTestCases } from "../models/testCaseUtils.js";

export async function getOutput(req,res) {
  try{
    const { userId, question, input} = req.body;
    if(question.type==='DML'){
      let result = await evaluateDML(userId, question, input, question.solutionQuery);
      if(result.success){
        res.json({msg: true, output: result.output});
      }else{
        res.json({msg: false});
      }
    }
    else if(question.type==='PL/SQL'){
      let result = await evaluatePLSQL(userId, question, input);
      if(result.success){
        res.json({msg: true, output: result.output});
      }else{
        res.json({msg: false});
      }
    }
  }
  catch(err){
    res.setHeader(400).json({err: err})
    console.log(err);
  }
}

export async function addTestCaseController(req,res){
  try{
    const {testCase} = req.body;
    console.log(testCase);
    const result = await addTestCase(testCase);
    if(result) res.json({msg: true});
    else res.json({msg: false});
  }catch(err){
    throw err;
  }
}

export async function getTestCasesController(req,res){
  const id = req.params.id;
  try{
    const result = await getTestCase(id);
    if(result){
      res.json({msg: true, result: result});
    }else{
      res.json({msg: false});
    }
  }catch(err){
    throw err;
  }
}


export async function getAllTestCasesController(req,res){
  const id = req.params.id;
  try{
    const result = await getAllTestCases(id);
    if(result){
      res.json({msg: true, result: result});
    }else{
      res.json({msg: false});
    }
  }catch(err){
    throw err;
  }
}

export async function editTestCaseController(req,res) {
  const id = req.params.id;
  const updatedData = req.body;
  try{
    const result = await editTestCase(id, updatedData);
    if(result){
      res.json({msg: true, result: result});
    }else{
      res.json({msg: false});
    }
  }catch(err){
    throw err;
  }
}

export async function deleteTestCaseController(req,res) {
  const id = req.params.id;
  try{
    const result = await deleteTestCase(id);
    if(result){
      res.json({msg: true});
    }else{
      res.json({msg: false});
    }
  }catch(err){
    throw err;
  }
}