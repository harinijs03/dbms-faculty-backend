import mongoose from "mongoose";

const OutputTestCaseSchema = new mongoose.Schema({
  id: {type: String, unique: true, required: true},
  output: [{
      type: [{
        tableName: String,
        schema: [{
          columnName: {type: String, required: true},
          type: {type: String, required: true}
        }],
        values: {type: [[mongoose.Schema.Types.Mixed]]}
      }]
  }]
});

export default mongoose.model('OutputTestCase',OutputTestCaseSchema);