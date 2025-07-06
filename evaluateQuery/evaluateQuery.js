import { clearEvaluationTableEnvironment, initEvaluationTableEnvironment } from "../services/evaluationQueryServices.js";
import { compileQuery } from "../services/oracleDBServices.js";

export async function executeQuery(userId, code, schemas) {
  try{
    await initEvaluationTableEnvironment(userId, schemas);
    const result = await compileQuery(userId, code);
    return result;
  }catch(err){
    throw err;
  }finally{
    await clearEvaluationTableEnvironment(userId, schemas);
  }
}