import mongoose from "mongoose";
import { IUser, Role } from "../../Types/types";


const userSchema = new mongoose.Schema<IUser>({
    firstName:String,
    lastName:String,
    email:String,
    password:String,
    role:{
        type:String,
        enum:Role,
       
    }
},{
    timestamps:true,
    toObject:{
        virtuals:true
    },
    toJSON:{
        virtuals:true
    }
})

const userModel = mongoose.models.User || mongoose.model<IUser>("User",userSchema)

userSchema
    .virtual('username')
    .get(function(){
    return `${this.firstName} ${this.lastName}`
})
    .set(function(value){
    const [firstName,lastName]= value.split(' ');
    this.firstName = firstName.toUpperCase();
    this.lastName = lastName.toUpperCase();
})

export {userModel}



