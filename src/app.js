import express from 'express';
import * as dotenv from 'dotenv';
import router from './routes/main.route.js';

dotenv.config();
const app = express();

app.use(express.json());
app.use(router);

export default app;
