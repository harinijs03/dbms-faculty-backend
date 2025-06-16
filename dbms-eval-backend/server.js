import express from 'express'
import cors from 'cors'
import questionRoutes from './routes/questionRoutes.js'
import connectMongoDB from './db.js';
import { appConfig } from './config/app.js';
import { createPool } from './config/database.js';
import testCaseRoutes from './routes/testCaseRoutes.js'

const app = express();
app.use(cors());
app.use(express.json());

connectMongoDB();

app.set('config',appConfig);

app.use('/api',questionRoutes,testCaseRoutes);

const PORT = 5001;

app.listen(PORT,()=>{
  createPool();
  console.log(`Listening at ${PORT}`);
})