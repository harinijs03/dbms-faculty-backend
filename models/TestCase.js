import mongoose from "mongoose";

export const testCaseSchema = new mongoose.Schema({
    questionId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Question', 
        required: true 
    },
    input: {
        tables : [
            {
                tableName: { type: String },
                rows:[{type: mongoose.Schema.Types.Mixed }],
                _id: false
            }
        ],
        variables: [
            {
                dir: { type: String },
                type: { type: String },
                name: { type: String },
                value: { type: mongoose.Schema.Types.Mixed },
                _id: false
            }
        ],
        returnValue : {
            type: { type: String },
            _id: false
        },
        _id: false
    },
    output: {
        tables : [
            {
                tableName: { type: String },
                rows:[{type: mongoose.Schema.Types.Mixed }],
                _id: false,
            }, 
        ],
        variables: [
            {
                dir: { type: String },
                type: { type: String },
                name: { type: String },
                value: { type: mongoose.Schema.Types.Mixed },
                _id: false
            }
        ],
        dbms_output: [ { type: String } ],
        returnValue: {
            type: { type: String },
            value: { type: mongoose.Schema.Types.Mixed },
            _id: false
        },
        _id: false
    },
    hidden: {type: Boolean, required: true},
});

export default mongoose.model('TestCase',testCaseSchema);