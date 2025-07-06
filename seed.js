import { insertValue } from "./models/Users.js";
import connectMongoDB from './db.js'

(async ()=>{
  try{
    await connectMongoDB();
  }catch(err){
    console.log(err);
  }
  const user = {
    oracleUsername: 'system',
    oraclePassword: 'system'
  }
  const result = await insertValue(user);
  console.log(result);
})()