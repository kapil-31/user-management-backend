import { MongoDBErrors } from "../errors/MongoDBErrors";
import UserModel,{ IUser } from "../models/Users";

export class UserService {
    static async createUser(user):Promise<IUser>{
        try{

        const newModal = new UserModel({
            ...user
        });
        return await newModal.save()
        }
        catch(e){
            throw new MongoDBErrors(e)
        }
    } 

    static async updateUserById(id,update):Promise<IUser>{
        try{
        return (await UserModel.findOneAndUpdate({_id:id},update,{new:true}))
        }
        catch(e){
            throw new MongoDBErrors(e)
        }
    }

    static async  deleteUserById(id):Promise<string>{
        try{
         await UserModel.findByIdAndDelete(id);
         return 'User Removed Successfullty'
        }
        catch(e){
            throw new MongoDBErrors(e)
        }
    }

    static async  getUserById(id):Promise<IUser>{
       return  await UserModel.findById(id);
        
    }

    static async  getAll({page,perPage}):Promise<{data:IUser[],pagination:any}>{
        return  {
            data:await UserModel.find()
            .skip((page - 1) * perPage)
            .limit(perPage),
            pagination:{
                page,
                perPage,
                total:await UserModel.countDocuments()
            }
        }
     }
}

