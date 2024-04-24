import express from 'express';
import dotenv from 'dotenv';
import morgon from 'morgan';
import connectDB from './config/db.js';
import routes from './routes/index.js'
import cors from 'cors';


dotenv.config()
connectDB();

const app = express();

//middlewares

const corsOptions = {
    origin: "http://localhost:3000",
    methods: ["GET", "POST","DELETE","PUT","PATCH"],
    credentials: true,
}

app.use(cors(corsOptions))
app.use(express.json())
app.use(morgon('dev'));


// routes
app.use('/', routes);

//Port
const PORT = process.env.PORT || 8080;

// run listen


app.listen(PORT, () => {
    console.log(`Server Running on ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan.white);
})

