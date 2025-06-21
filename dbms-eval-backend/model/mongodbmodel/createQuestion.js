import Question from './QuestionSchema.js'

export async function createQuestion(ques){
  try{
    const newQuestion = new Question(ques);
    const addedQuestion = await newQuestion.save();
    return addedQuestion._id;
  }catch(err){
    console.log(err);
  }
}