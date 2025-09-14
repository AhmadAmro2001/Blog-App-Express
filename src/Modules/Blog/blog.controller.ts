import { Router } from "express";
import blogServices from "./services/blog.services";
import { asyncHandler, authMiddleware } from "../../Middlewares";


const blogController = Router();

blogController.post('/addBlog',authMiddleware(),asyncHandler(blogServices.AddBlog))
blogController.get('/getBlogs',authMiddleware(),asyncHandler(blogServices.GetBlogs))




export {blogController}
