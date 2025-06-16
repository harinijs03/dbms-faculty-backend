import mongoose from 'mongoose';

const quesSchema = new mongoose.Schema({
  id: { type: String },
  title: { type: String },
  description: { type: String },
  statement: { type: String },
  inputFormat: { type: String },
  outputFormat: { type: String },
  marks: { type: Number },
});

export default mongoose.model("Question", quesSchema);

