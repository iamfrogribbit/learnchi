import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import AuthRouter from './routes/auth.routes.js';

const PORT = process.env.PORT || 3000;
const app = express();

const corsOptions = {
    origin: [
        "http://localhost:5173",
        "https://learnchi.vercel.app"
    ],
    methods: ['GET', 'POST', 'PUT', 'DELETE']
}

app.use(cors(corsOptions));
app.use(express.json());

app.use('/api/auth', AuthRouter);

app.get('/', (req, res) => {
    res.send({
        body: "Response and such things such as that"
    })
})

app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
})