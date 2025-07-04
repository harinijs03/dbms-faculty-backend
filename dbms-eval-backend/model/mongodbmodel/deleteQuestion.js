import Question from './QuestionSchema.js';
import { deleteTestCasesByQuesId } from './deleteTestCase.js';

export async function deleteQuestion(id) {
  try {
    if (!id) {
      throw new Error('No ID provided for deletion');
    }

    const result = await Question.findOneAndDelete({ _id: id }).exec();
    const tresult = await deleteTestCasesByQuesId(id);
    
    if (!result) {
      console.log(`No question found with id: ${id}`);
      return false;
    }
    
    console.log(`Successfully deleted question with id: ${id}`);
    return true;
  } catch (err) {
    console.error('Error deleting question:', err.message);
    return false;
  }
}