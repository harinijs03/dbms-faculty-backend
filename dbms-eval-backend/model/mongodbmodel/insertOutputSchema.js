import mongoose from "mongoose";
import OutputTestCaseSchema from "./OutputTestCaseSchema.js";

export async function insertOutputSchema(id, tableName, columnSchema, tableData) {
    try{
      const newTableDefinition = {
        tableName: tableName,
        schema: columnSchema,
        values: tableData
      }
      const query = {id: id}
      const update = {
        $push: {'output.0': newTableDefinition},
        $setOnInsert: {id: id}
      }
      const options = {
        new: true,
        upsert: true,
        runValidators: true
      }
      const docs = await OutputTestCaseSchema.findOneAndUpdate(query,update,options);
      if(docs){
        return docs;
      }else{
        return null;
      }
    }catch(err){
    console.log(err);
    }
}
