import { Request,Response,NextFunction } from "express";
import { MongoDBErrors } from "../errors/MongoDBErrors";



export const errorHandler = (err:Error,req:Request,res:Response,next:NextFunction):void=>{
   if(err instanceof MongoDBErrors){
    if(err.name==='DuplicatedError'){
        res.status(500).json({error:err.message})
    }
    else if(err.name==='ValidationError'){
        const validationErrors = (err as MongoDBErrors).validationErrors;
        let userFriendlyErrors:{[key:string]:string} = {}
        
        for (const key in validationErrors) {
                  const errorMessage = (validationErrors[key] as any).message;
                  userFriendlyErrors[key] = errorMessage;
                }
        res.status(500).json({error:userFriendlyErrors})
    }
   
    else {
        res.status(500).json({error:'Database Operation Failed: '+err.message})
    }
   }
   else{
    res.status(500).json({error:err.message})
   }  
}