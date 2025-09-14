import { NextFunction, Request, Response } from "express";
import { ISignIn, ISignUp } from "../auth.dto";
import DatabaseService from "../../../DB/database.service";
import { userModel } from "../../../DB/models";
import { IAuthRequest, IUser } from "../../../Types/types";
import { compareSync, hash } from "bcrypt";
import { generateToken } from "../../../Utiles";


class AuthService {
    private User = new DatabaseService<IUser>(userModel)
    
    SignUp = async (req:Request,res:Response,next:NextFunction)=>{
        const {firstName,lastName,email,password,role}:ISignUp = req.body;
        const user = await this.User.findOne({email})
        if(user){
            return next(new Error("User already exists",{cause:409}))
        }
        const hashedPassword = await hash(password,10)
        const newUser = await this.User.create({
            firstName,
            lastName,
            email,
            password:hashedPassword,
            role
        });
        return res.status(201).json({message:"User created successfully" , newUser})
    }

    SignIn = async (req:Request , res:Response ,next:NextFunction)=>{
        const {email,password}:ISignIn = req.body;
        const user = await this.User.findOne({email})
        if(!user){
            return next(new Error("User not found" , {cause:404}))
        }
        const isPasswordMatched = compareSync(password,user.password)
        if(!isPasswordMatched){
            return next(new Error("Invalid credentials" , {cause:401}))
        }
        
        const token = generateToken({id:user._id},process.env.JWT_SECRET as string,{expiresIn:"1d"  })
        return res.json({message:"User signed in successfully" , token})
    }
    
    GetProfile = async (req:IAuthRequest,res:Response,next:NextFunction)=>{
        const user = await this.User.findById(req.authUser?._id)
        if(!user){
            return next(new Error("please login first" , {cause:404}))
        }
        return res.json({message:"User profile fetched successfully" , user})
    }
}

export default new AuthService()
