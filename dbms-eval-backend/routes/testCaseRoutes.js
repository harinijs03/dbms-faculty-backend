import express from 'express'
import * as controller from '../controller/createTestCaseController.js'

const router = express.Router();

router.post("/insert-input-testcase",controller.createInputSchemaController);

router.post("/insert-output-testcase",controller.createOutputSchemaController);

export default router;