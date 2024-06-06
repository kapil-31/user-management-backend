import mongoose from "mongoose";
import { config } from "./config";

const connectDB = ()=>{
    return new Promise(async (resolve,reject)=>{
        try{
        await mongoose.connect(config.MONGOURI)
        resolve('mongodb connected successfully');
        }
        catch(e){
            reject(e)
            console.error(e.message)
            process.exit(1)
           
        }
    })
}

export default connectDB;