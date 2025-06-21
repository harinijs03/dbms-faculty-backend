import mongoose from "mongoose";

const TestCaseSchema = new mongoose.Schema({
  questionId: { type: mongoose.Schema.Types.ObjectId, ref: 'Question' },
  input: [{
      type: [{
        tableName: String,
        values: [[mongoose.Schema.Types.Mixed]]
      }]
  }],
  output: {
    columns: [String],                    
    values: [[mongoose.Schema.Types.Mixed]]
  },
  hidden: {type: Boolean, required: true}
});

export default mongoose.model('TestCase',TestCaseSchema);