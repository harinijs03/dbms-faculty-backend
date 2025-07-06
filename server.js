import express from 'express'
import cors from 'cors'
import appConfig from './config/app.js';
import connectMongoDB from './db.js';
import questionRoutes from './routes/questionRoutes.js'
import testCaseRoutes from './routes/testCaseRoutes.js'
import { createPool } from './config/database.js';
import bodyParser from 'body-parser';

const app = express();

app.use(cors());
app.use(express.json());

app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '10mb' }));

connectMongoDB();

app.set('config',appConfig);

app.use('/api',questionRoutes);
app.use('/api',testCaseRoutes);

const PORT = 5000;

app.listen(PORT,()=>{
  createPool();
  console.log(`Listening at ${PORT}`);
})