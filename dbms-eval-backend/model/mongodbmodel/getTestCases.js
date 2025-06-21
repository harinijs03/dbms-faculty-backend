import TestCaseSchema from "./TestCaseSchema.js";

export async function getTestCases(id){
  try{
    const testCases = await TestCaseSchema.find({
      questionId: id
    });
    return testCases;
  }catch(err){
    console.log(err);
  }
}