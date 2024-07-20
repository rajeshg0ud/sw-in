import express from "express";
import restaurantRouter from "./routes/restaurantsRouter.js";
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
const app= express();

const port= 5000;
 
const NODE_ENV = process.env.NODE_ENV || 'development';

app.use(cors({
    origin: NODE_ENV ==='development' ? 'http://localhost:3000' :'https://swiggy-india.vercel.app',
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'Accept', 'Origin', 'Access-Control-Request-Method', 'Access-Control-Request-Headers'],

}))
 
app.use('/api/restaurants', restaurantRouter);

app.listen(port, ()=>{
    console.log(`server is running on port ${port}`)
})
