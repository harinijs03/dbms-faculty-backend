import {editQuestion} from '../model/mongodbmodel/editQuestion.js'

export async function editQuestionController(req,res){
  const id = req.params.id;
  const ques = req.body;
  try{
    const result = await editQuestion(id,ques);
    if(result){
      res.json({msg: true});
    }
  }catch(err){
    console.log(err);
  }
}