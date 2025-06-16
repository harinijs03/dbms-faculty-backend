import Question from "./QuestionSchema.js"

export async function editQuestion(id,ques){
  try{
    const updatedQuestion = await Question.findOneAndUpdate({
      id: id,
    },
    {
      $set: ques
    },
    { new: true, runValidators: true }
    )
    return updatedQuestion;
  } catch (err) {
    console.error(err);
  }
}