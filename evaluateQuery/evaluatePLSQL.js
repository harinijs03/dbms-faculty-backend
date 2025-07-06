import {
  selectTable,
  executePLSQL
} from '../services/oracleDBServices.js';

import {
  initEvaluationTableEnvironment,
  initTestCaseTableEnvironment,
  clearEvaluationTableEnvironment
} from '../services/evaluationQueryServices.js';

export async function evaluatePLSQL(userId, ques, input) {
  const { solutionQuery, subType, outputTypes = [] } = ques;

  try {
    await initEvaluationTableEnvironment(userId, ques.schemas);
    await initTestCaseTableEnvironment(userId, input.tables);

    const execOptions = {
      callName: ques.solutionCallName,
      variables: input.variables,
      returnValue: input.returnValue,
      query: ques?.validationQuery || ''
    };

    const result = await executePLSQL(userId, solutionQuery, subType, execOptions);
    const { variables: resultVars, dbms_output, returnValue } = result;

    console.log("🧪 Raw dbms_output:", dbms_output);

    const output = {
      tables: [],
      variables: [],
      dbms_output: [],
      returnValue: null
    };

    if (outputTypes.includes("tables")) {
      for (const schema of ques.schemas) {
        const rows = await selectTable(userId, schema.tableName);
        output.tables.push({ tableName: schema.tableName, rows });
      }
    }

    if (outputTypes.includes("variables")) {
      output.variables = input.variables.map(v => ({
        name: v.name,
        dir: v.dir,
        type: v.type,
        value: resultVars[v.name]  
      }));
    }

    if (outputTypes.includes("dbms_output")) {
      output.dbms_output = dbms_output;
    }

    if (outputTypes.includes("returnValue")) {
      output.returnValue = {
        type: input.returnValue?.type || '',
        value: returnValue
      };
    }

    console.log("🎯 Final test output:", output);
    return { success: true, output };

  } catch (err) {
    console.error("evaluatePLSQL error:", err);
    return { success: false, error: err.message, output: null };
  } finally {
    await clearEvaluationTableEnvironment(userId, ques.schemas);
  }
}
