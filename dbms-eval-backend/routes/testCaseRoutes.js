import express from 'express'
import * as controller from '../controller/createTestCaseController.js'
import * as editController from '../controller/editTestCaseController.js'

const router = express.Router();

router.post("/addtestcases",controller.addTestCaseController);

router.get("/gettestcases/:id",controller.getTestCaseController);

router.get("/getonetestcase/:id",controller.getOneTestCaseController);

router.put("/edittestcase/:id",editController.editTestCaseController);

router.delete("/deletetestcase/:id",controller.deleteTestCaseController);

export default router;