import express from 'express'
import * as questionControllers from '../controllers/quesControllers.js'

const router = express.Router();

router.post('/create-question',questionControllers.createQuestionController);

router.get('/get-question/:id',questionControllers.getQuestionController);

router.get('/get-all-questions',questionControllers.getAllQuestionsController);

router.put('/edit-question/:id',questionControllers.editQuestionController);

router.delete('/delete-question/:id',questionControllers.deleteQuestionController);

router.post('/run-query-ques',questionControllers.runQuery);


export default router;