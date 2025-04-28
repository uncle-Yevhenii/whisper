import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import pingRouter from './routers/ping.routers';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));

app.use(pingRouter);

app.listen(PORT, () => {
    console.warn(`Server is running on http://localhost:${PORT}`);
});
