import mongoose from "mongoose";
const mongoURI ='mongodb://localhost:27017/test'

const connectDB = ()=>{
    return new Promise(async (resolve,reject)=>{
        try{
        await mongoose.connect(mongoURI)
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