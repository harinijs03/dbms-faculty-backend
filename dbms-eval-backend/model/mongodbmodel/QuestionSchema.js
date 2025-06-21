import mongoose from 'mongoose';

const quesSchema = new mongoose.Schema({
  title: { type: String },
  description: { type: String },
  statement: { type: String },
  type: {type: String},
  marks: { type: Number },
  schemas: [
        {
            tableName: { type: String, required: true },
            columns: [
                {
                columnName: { type: String, required: true },
                type: { type: String, required: true }
                }
            ]
        }
  ]
});

export default mongoose.model("Question", quesSchema);

