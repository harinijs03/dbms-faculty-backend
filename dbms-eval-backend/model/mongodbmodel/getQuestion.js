import Question from '../mongodbmodel/QuestionSchema.js'

export async function getQuestion(){
  try{
    const docs = await Question.find();
    return docs;
  }
  catch(err){
    console.log(err);
  }
}

export async function getOneQuestion(id){
  try{
    const docs = await Question.find({id: id});
    return docs;
  }catch(err){
    console.log(err);
  }
}