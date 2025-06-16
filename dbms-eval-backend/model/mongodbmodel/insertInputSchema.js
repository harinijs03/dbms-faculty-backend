import mongoose from "mongoose";
import InputTestCaseSchema from "./InputTestCaseSchema.js";

export async function insertInputSchema(id, tableName, columnSchema, tableData) {
    try{
      const newTableDefinition = {
        tableName: tableName,
        schema: columnSchema,
        values: tableData
      }
      const query = {id: id}
      const update = {
        $push: {'input.0': newTableDefinition},
        $setOnInsert: {id: id}
      }
      const options = {
        new: true,
        upsert: true,
        runValidators: true
      }
      const docs = await InputTestCaseSchema.findOneAndUpdate(query,update,options);
      if(docs){
        return docs;
      }else{
        return null;
      }
    }catch(err){
    console.log(err);
    }
}
