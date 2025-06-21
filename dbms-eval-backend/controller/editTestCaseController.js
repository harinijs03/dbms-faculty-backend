import { editTestCase } from "../model/mongodbmodel/editTestCase.js";

export async function editTestCaseController(req,res){
  try{
    const id = req.params.id;
    const updatedData = req.body;
    const docs = await editTestCase(id,updatedData);
    if(docs){
      res.json({msg: true});
    }
    else{
      res.setHeader(500).json({msg: false});
    }
  }catch(err){
    console.log(err);
  }
}