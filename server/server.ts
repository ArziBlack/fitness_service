import express, { Application } from 'express';
import cors from 'cors';
import colors from 'colors';
import dotenv from 'dotenv';
import routes from './routes/index'
import { connectDB } from './config/db';

dotenv.config();

if (!process.env.PORT) {
    process.exit(1);
}

const port = process.env.PORT || 4000;
connectDB();
const app: Application = express();

app.use(cors({credentials: true}));
app.use(express.json());
app.use("/fitness", routes);
app.listen(port, ()=> {
    console.log(colors.rainbow(`Backend Server Started and Running on Port ${port}...`));
});