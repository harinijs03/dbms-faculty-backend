import TestCaseSchema from "./TestCaseSchema.js"

export async function editTestCase(id,updatedData){
  try{
    const docs = await TestCaseSchema.findOneAndUpdate({
      _id: id
    },
    {
    $set:{
      input: updatedData.input,
      output: updatedData.output,
      hidden: updatedData.hidden
    }
    })
    return docs;
  }catch(err){
    console.log(err);
  }
}