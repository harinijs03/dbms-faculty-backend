import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    type: { type: String, required: true },
    subType: { type: String, required: true },
    outputTypes: [{ type: String }],
    marks : { type: Number, required: true },
    schemas: {
        type: [{
            tableName: { type: String, required: true },
            rows: [
                {
                columnName: { type: String, required: true },
                columnType: { type: String, required: true }
                }
            ]
        }],
        validate: {
          validator: function(v){
            if(this.subType=='procedure'||this.subType=='function'){
              return true;
            }
            return Array.isArray(v)&&v.length>0;
          },
          message: props=> `Schemas are required unless subType is 'procedure' or 'function'.`
        }
      },
    solutionQuery: {type: String, required: true},
    solutionCallName: { type: String},
    validationQuery: { type: String },
    createdAt:{ type: Date, default: Date.now }
})

export default mongoose.model('Question',questionSchema);