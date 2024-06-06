import mongoose, { Schema } from "mongoose";
import bcrypt from 'bcrypt'


export interface IUser extends Document {
    name:string,
    email:string,
    password:string,
}


const userSchema:Schema = new mongoose.Schema({
    name:{type:String,required:[true,'Name is required']},
    email:{type:String,required:[true,'Email is required'],unique:[true]},
    password:{type:String,required:true},
},{
    timestamps:true
})
interface UserDocument extends IUser, Document {
    isModified(path?: string): boolean;
  }

userSchema.pre<UserDocument>("save",async function (next){
    const user = this;
    if(!user.isModified('password')) return next();
    try{
        const hashedPassword = await bcrypt.hash(user.password,10)
        user.password= hashedPassword;
        next();
    }
    catch(err){
       return  next(err)
    }
})

userSchema.pre<UserDocument>("findOneAndUpdate",async function (next){
    const user = this as any
    const update = (user).getUpdate() as UserDocument;
    if(update.password){
        try{
            const hashedPassword = await bcrypt.hash(update.password,10)
            user.getUpdate().password = hashedPassword; 
        }
        catch(e){
         return    next(e)

        }
    }
    next();
})


export default mongoose.model<IUser>('users',userSchema);


