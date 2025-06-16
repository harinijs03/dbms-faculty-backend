import {insertInputSchema} from '../model/mongodbmodel/insertInputSchema.js'
import {insertOutputSchema} from '../model/mongodbmodel/insertOutputSchema.js'

export async function createInputSchemaController(req,res){
  const {id,tableName,columns,tableData} = req.body;
  console.log({tableName,columns})
  if(!tableName||!Array.isArray(columns)||columns.length===0){
    res.status(400).send({msg:"Error invalid table schema"});
  }
  if(!Array.isArray(tableData)||tableData.length===0){
    res.status(400).send({msg:"Error table data is empty"});
  }
  try{
    const docs = await insertInputSchema(id,tableName,columns,tableData);
    if(docs){
      res.json({msg: true});
    }
  }catch(err){
    console.log(err);
  } 
}

export async function createOutputSchemaController(req,res){
  const {id,tableName,columns,tableData} = req.body;
  console.log({id,tableName,columns,tableData})
  console.log({tableName,columns})
  if(!tableName||!Array.isArray(columns)||columns.length===0){
    res.status(400).send({msg:"Error invalid table schema"});
  }
  if(!Array.isArray(tableData)||tableData.length===0){
    res.status(400).send({msg:"Error table data is empty"});
  }
  try{
    const docs = await insertOutputSchema(id,tableName,columns,tableData);
    res.json({msg: true});
  }catch(err){
    console.log(err);
  } 
}

