import mongoose from "mongoose";
import { IBlog } from "../../Types/types";



const blogSchema = new mongoose.Schema<IBlog>({
    title:String,
    content:String,
    author:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    }
},{
    timestamps:true
})



const blogModel = mongoose.models.Blog || mongoose.model<IBlog>("Blog",blogSchema)


export {blogModel}
