import { Secret } from './../../node_modules/@types/jsonwebtoken/index.d';
import jwt from "jsonwebtoken";


export const generateToken = (
    payload:jwt.JwtPayload,
    Secret:jwt.Secret,
    options:jwt.SignOptions
):string=>{
    return jwt.sign(payload,Secret,options)
}


export const verifyToken = (
    token:string,
    Secret:jwt.Secret
):jwt.JwtPayload=>{
    return jwt.verify(token,Secret) as jwt.JwtPayload
}