import mongoose from "mongoose";

const InputTestCaseSchema = new mongoose.Schema({
  id: {type: String, unique: true, required: true},
  input: [{
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

export default mongoose.model('InputTestCase',InputTestCaseSchema);