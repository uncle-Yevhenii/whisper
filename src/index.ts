const PORT = process.env.PORT || 3000;
const PATH_PREFIX = '/api/v1';

import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import pingRouter from './routers/ping.routers';
import noteRouter from './routers/note.router';

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));

app.use(PATH_PREFIX, pingRouter);
app.use(PATH_PREFIX, noteRouter);

app.listen(PORT, () => {
    console.warn(`Server is running on http://localhost:${PORT}`);
});
