import sirv from 'sirv';
import compression from 'compression';
import * as sapper from '@sapper/server';
import express from 'express';
import { testController } from './controllers/TestController';

const app = express();

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

app.use(express.json());
app.use(compression({ threshold: 0 }));
app.use(sirv('static', { dev }));
app.use(testController);
app.use(sapper.middleware());
app.listen(PORT, () => {});
