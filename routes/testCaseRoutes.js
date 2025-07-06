import express from 'express'
import * as controller from '../controllers/testCaseContollers.js'

const router = express.Router();

router.post('/get-output',controller.getOutput);

router.post('/add-testcase',controller.addTestCaseController);

router.get('/get-testcase/:id',controller.getTestCasesController);

router.get('/get-all-testcases/:id',controller.getAllTestCasesController);

router.put('/edit-testcase/:id',controller.editTestCaseController);

router.delete('/delete-testcase/:id',controller.deleteTestCaseController);

export default router;