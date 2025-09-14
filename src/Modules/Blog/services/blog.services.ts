import { NextFunction, Response } from "express"
import DatabaseService from "../../../DB/database.service"
import { blogModel } from "../../../DB/models"
import { IAuthRequest, IBlog } from "../../../Types/types"

class BlogService{
    private Blog = new DatabaseService<IBlog>(blogModel)

    AddBlog = async (req:IAuthRequest,res:Response,next:NextFunction)=>{
        const {title,content}:IBlog = req.body;
        const blog = await this.Blog.create({title,content,author:req.authUser?._id});

        return res.status(201).json({message:"Blog added successfully" , blog})
    }

    GetBlogs = async (req:IAuthRequest,res:Response,next:NextFunction)=>{
        const blogs = await this.Blog.find({author:req.authUser?._id})
        return res.json({message:"Blogs fetched successfully" , blogs})
    }
    

}

export default new BlogService()
