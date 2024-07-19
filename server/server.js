import express from "express";
import restaurantRouter from "./routes/restaurantsRouter.js";
import cors from 'cors';

const app= express();

const port= 5000;
 
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'Accept', 'Origin', 'Access-Control-Request-Method', 'Access-Control-Request-Headers'],

}))
 
app.use('/api/restaurants', restaurantRouter);

app.listen(port, ()=>{
    console.log(`server is running on port ${port}`)
})