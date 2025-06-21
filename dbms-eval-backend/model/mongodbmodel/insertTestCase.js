import TestCaseSchema from "./TestCaseSchema.js";

export async function insertTestCase({questionId,input,output,hidden}){
  try{
    const addedTestCase = new TestCaseSchema({questionId,input,output,hidden});
    const savedTestCase = addedTestCase.save();
    return true;
  }catch(err){
    console.log(err);
  }
}