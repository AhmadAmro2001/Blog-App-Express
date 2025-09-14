"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_service_1 = __importDefault(require("../../../DB/database.service"));
const models_1 = require("../../../DB/models");
class BlogService {
    Blog = new database_service_1.default(models_1.blogModel);
    AddBlog = async (req, res, next) => {
        const { title, content } = req.body;
        const blog = await this.Blog.create({ title, content, author: req.authUser?._id });
        return res.status(201).json({ message: "Blog added successfully", blog });
    };
    GetBlogs = async (req, res, next) => {
        const blogs = await this.Blog.find({ author: req.authUser?._id });
        return res.json({ message: "Blogs fetched successfully", blogs });
    };
}
exports.default = new BlogService();
//# sourceMappingURL=blog.services.js.map