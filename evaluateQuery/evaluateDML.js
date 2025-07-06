import { initEvaluationTableEnvironment } from "../services/evaluationQueryServices.js";
import { initTestCaseTableEnvironment } from "../services/evaluationQueryServices.js";
import { executeSelect } from "../services/oracleDBServices.js";
import { executeQuery } from "../services/oracleDBServices.js";
import { getAllTableNames } from "../services/oracleDBServices.js";
import { selectTable } from "../services/oracleDBServices.js";
import { clearEvaluationTableEnvironment } from "../services/evaluationQueryServices.js";

export async function evaluateDML(userId, question, input, code) {
  let output = [];
  try{
    await initEvaluationTableEnvironment(userId, question.schemas);
    await initTestCaseTableEnvironment(userId, input.tables);
    if(question.subType === 'SELECT'){
      let result = executeSelect(userId, code);
      if(result){
        output = {
          tables: result,
          variables: [],
          dbms_output: [],
          returnValue: ''
        }
      }
    }else{
      output = await evaluateOtherDML(userId, code, question);
    }
    return {
      success: true,
      output
    }
  }
  catch(err){
    console.log(err);
  }finally{
    await clearEvaluationTableEnvironment(userId, question.schemas);
  }
}

export async function evaluateOtherDML(userId, code, question){
  let allTables = {};
  try{
    const res = await executeQuery(userId, code);
    if(res){
      for(const schema of question.schemas) {
        allTables[schema.tableName] = await selectTable(userId, schema.tableName);
      }
    }
    let output = {
      tables: allTables,
      variables: [],
      dbms_output: [],
      returnValue: ''
    }
    return output;
  }catch(err){
    console.log(err);
    throw err;
  }
}