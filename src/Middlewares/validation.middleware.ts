import { ObjectSchema } from "joi";
import { asyncHandler } from "./error-handling.middleware";
import { NextFunction, Request, Response } from "express";

export const validationMiddleware = (Schema:Record<string,ObjectSchema>)=>{
    return  asyncHandler(
        async (req:Request,res:Response,next:NextFunction)=>{
            const schemaKeys = Object.keys(Schema);

            const validationErrors:{key:string,errors:string[]}[] = [];
            for(const key of schemaKeys){
                const schema = Schema[key];
                if(!schema){
                    continue;
                }
                const{error} = schema.validate(req[key as keyof Request] , {abortEarly:false});
                if(error){
                    validationErrors.push({
                        key:key,
                        errors:error.details.map((detail)=>detail.message)
                    })
                }
            }

            if(validationErrors.length){
                return res.status(400).json({
                    message:"Validation Error",
                    errors:validationErrors
                })
            }
            next()
        }
    );
}