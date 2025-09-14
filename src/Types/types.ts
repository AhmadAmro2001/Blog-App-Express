import { Types } from "mongoose";
import { Request } from "express";

export interface IError{
    message:string;
    status?:number;
    cause?:number;
    stack?:string;
}


export enum Role {
    USER = "user",
    ADMIN = "admin"
}


export interface IUser{
    _id:Types.ObjectId;
    firstName:string;
    lastName:string;
    email:string;
    password:string;
    role:Role;
    createdAt:Date;
    updatedAt:Date
}

export interface IBlog{
    _id:Types.ObjectId;
    title:string;
    content:string;
    author:Types.ObjectId;
    createdAt:Date;
    updatedAt:Date
}

export interface IAuthRequest extends Request{
    authUser:IUser
}