import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import AuthRouter from './routes/auth.routes.js';

const PORT = process.env.PORT || 3000;
const app = express();

const corsOptions = {
    origin: ["http://localhost:5173"]
}

app.use(cors(corsOptions));
app.use(express.json());

app.use('/api/auth', AuthRouter);

app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
})