// modules
import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import helmet from 'helmet'
// local modules
const session = require('express-session');  // session middleware
const passport = require('passport');  // authentication
const connectEnsureLogin = require('connect-ensure-login'); //authorization
import fs from 'fs'
import path from 'path'
import { DB, PORT } from './config/variables'
import userRouter from './routes/userRouters'
import { userSchema } from './models/user';

// config
const app = express()
//--------
// app.use(cors())
app.use(express.json());
app.use(helmet());
app.use(express.urlencoded({ extended: true }))
app.use('/user',userRouter)
// swagger configuration


app.post('/ping',(req,res)=>{
res.status(200).json({message:'hai ping'})
    
    
})







// database connection

console.log({DB});

mongoose.connect(DB).catch(err=>{
    console.log("database configuration error",err);
    
})



//server connection
app.listen(PORT, () => {
    console.log(`server running in port ${PORT} `);

})