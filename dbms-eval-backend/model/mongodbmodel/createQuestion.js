import Question from './QuestionSchema.js'

export async function createQuestion(ques){
  const newQuestion = new Question(ques);
  await newQuestion.save().then(()=>{
    console.log("New Question Created");
  }).catch(err=>{
    console.log(err);
  })
}