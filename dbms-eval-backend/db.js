import mongoose from 'mongoose'

const connectMongoDB = async()=>{
  try{
    await mongoose.connect('mongodb://localhost:27017/dbmsLabEval',{
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('Mongodb connected');
  }catch(err){
    console.log(err);
  }
}

export default connectMongoDB


