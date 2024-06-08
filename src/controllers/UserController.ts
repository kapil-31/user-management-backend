import { NextFunction, Request, Response } from "express";
import { ValidationChain,body } from "express-validator";
import { UserService } from "../services/UserService";



export class userController  {

    static async createUser(req:Request,res:Response,next:NextFunction){
        try{
            const userData = req.body;
            const user = await UserService.createUser(userData);
            res.status(200).json({data:user,message:'User Added Successfully !'})
        }
        catch(e){
            next(e);
        }
      
    }
    static async getAll(req:Request,res:Response,next:NextFunction){
        try{
            const page = parseInt(req.query.page as string) || 1;
            const perPage = parseInt(req.query.perPage as string) || 10;
            const {data,pagination} = await UserService.getAll({page,perPage});
            res.status(200).json({data:data,pagination,'message':"success"})
        }
        catch(e){
            next(e)
        }
    }
    static async getUserById(req:Request,res:Response,next:NextFunction){
        try{
            const id = req.params.id;
            const user = await UserService.getUserById(id);
            res.status(200).json({data:user,message:'success'})
        }
        catch(e){
            next(e)
        }
    }

    static async updateById(req:Request,res:Response,next:NextFunction){
        try{
            const id = req.params.id;
            const user = await UserService.updateUserById(id,req.body);
           
            res.status(200).json({data:user,message:"User Updated Successfully"})
        }
        catch(e){
            next(e)
        }
    }

    static async deleteUserById(req:Request,res:Response,next:NextFunction){
        try{
            const id = req.params.id;
            const message = await UserService.deleteUserById(id);
            res.status(200).json({message})
        }
        catch(e){
            next(e)
        }
    }
}