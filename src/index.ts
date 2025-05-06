import express, { Request, Response } from 'express';
import morgan from 'morgan';
import cors from 'cors';

import path from 'path';
import config from './configs/config';
import SERVER_OPTIONS from './constants';

import pingRouter from './routers/ping.routers';
import noteRouter from './routers/note.router';

const { server } = config;

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));

app.use(SERVER_OPTIONS.PATH_PREFIX, pingRouter);
app.use(SERVER_OPTIONS.PATH_PREFIX, noteRouter);

app.use(express.static(path.join(__dirname, '..', 'public')));

app.get(/^\/(?!api).*/, (_req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

app.listen(server.PORT, () => {
    console.warn(`Server is running on http://localhost:${server.PORT}`);
});
