"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.blogController = void 0;
const express_1 = require("express");
const blog_services_1 = __importDefault(require("./services/blog.services"));
const Middlewares_1 = require("../../Middlewares");
const blogController = (0, express_1.Router)();
exports.blogController = blogController;
blogController.post('/addBlog', (0, Middlewares_1.authMiddleware)(), (0, Middlewares_1.asyncHandler)(blog_services_1.default.AddBlog));
blogController.get('/getBlogs', (0, Middlewares_1.authMiddleware)(), (0, Middlewares_1.asyncHandler)(blog_services_1.default.GetBlogs));
//# sourceMappingURL=blog.controller.js.map