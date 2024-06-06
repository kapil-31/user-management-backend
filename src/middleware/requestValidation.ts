import { validationResult } from 'express-validator';
import { Request,Response,NextFunction } from 'express';



type expressVaditorErrorType ={
        "type": string
        "msg": string
        "path": string
        "location": string
}

export const requestValidate = (req:Request,res:Response,next:NextFunction):void =>{
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        const formattedErrors = (errors.array() as expressVaditorErrorType[]).reduce((acc, error) => {
            acc[error.path] = error.msg;
            return acc;
          }, {});
           res.status(400).json(formattedErrors);
           return
    }
    next();
}