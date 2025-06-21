import TestCaseSchema from "./TestCaseSchema.js";

export async function deleteTestCase(id){
  try{
    const result = await TestCaseSchema.deleteOne({
      _id: id
    });
    if(result){
      console.log("Testcase deleted");
      return true;
    }
    console.log("Error Testcase not found");
    return false;
  }catch(err){
    console.log(err);
  }
}

export async function deleteTestCasesByQuesId(id){
  try{
    const result = await TestCaseSchema.deleteMany({
      questionId: id
    });
    if(result){
      console.log(`All the testcases associated with the id ${id} has been deleted`);
      return true;
    }
  }catch(err){
    console.log(err);
  }
}