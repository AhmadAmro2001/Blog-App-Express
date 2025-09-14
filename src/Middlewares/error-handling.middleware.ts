
import { NextFunction, Request, Response } from "express";
import { IError } from "../Types/types";

// local error


export const asyncHandler = (fn: Function) => {
    return (req: Request, res: Response, next: NextFunction) => {
        fn(req, res, next).catch((err:IError)=>{
            next(err)
        });
    };
};






// global error handler
export const globalHandler = (err:IError,req:Request,res:Response,next:NextFunction)=>{
    
    const errorStatus = err.status || err.cause || 500

    res.status(errorStatus).json({
        message:"Something went wrong",
        error:err.message
    })
}