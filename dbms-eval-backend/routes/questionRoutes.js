import express from 'express'
import * as controller from '../controller/createQuestionController.js'
import * as editController from '../controller/editQuestionController.js'

const router = express.Router();

router.post('/createquesdesc',controller.createQuestionContoller);

router.get('/getquestions',controller.getQuestionController);

router.get('/getoneques/:id',controller.getOneQuestionController);

router.put('/editquestion/:id',editController.editQuestionController);

router.delete('/deletequestion/:id',controller.deleteQuestionContoller);

export default router;