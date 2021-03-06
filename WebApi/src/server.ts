import dotenv from 'dotenv';
import 'reflect-metadata';
import express from 'express';
import cors from 'cors';
import routes from './routes';
import './database';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(process.env.PORT || 3333, () => {
    console.log('Running server');
});

