require('dotenv').config()

import express, { Request, Response }  from "express";
import cors from 'cors'
import connectDB from "./database";
import routes from './routes/v1/index'
import { errorHandler } from "./middleware/ErrorHandler";
import { config } from "./config";

const app = express();

app.use(cors())

app.use(express.json())

app.use(express.urlencoded({extended:true}))

app.use('/v1/api',routes)
app.use('/health-check',function(req:Request,res:Response){
    res.send('It\'s working')
})


app.use(errorHandler)

connectDB().then((message)=>{
    console.log(message)
    app.listen(config.PORT ,()=>{
        console.log('Server is Running on port '+" "+ (config.PORT))
    })
}).catch(err=>{
    console.log(err)
})

