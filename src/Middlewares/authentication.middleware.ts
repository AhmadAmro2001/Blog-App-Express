import { NextFunction, Request, Response } from "express"
import { asyncHandler } from "."
import { verifyToken } from "../Utiles"
import DatabaseService from "../DB/database.service"
import { IAuthRequest, IUser } from "../Types/types"
import { userModel } from "../DB/models"

export const authMiddleware = ()=>{
    const User = new DatabaseService<IUser>(userModel)
    return asyncHandler(
        async (req:IAuthRequest,res:Response,next:NextFunction)=>{
            const {accesstoken} = req.headers
            if(!accesstoken){
                return res.status(401).json({message:"Unauthorized"})
            }

            const decodedData = verifyToken(accesstoken as string,process.env.JWT_SECRET as string)
            const user = await User.findById(decodedData.id)
            if(!user){
                return res.status(401).json({message:"Please signup first"})
            }
            
            req.authUser = user
            next()
        }
    )
}