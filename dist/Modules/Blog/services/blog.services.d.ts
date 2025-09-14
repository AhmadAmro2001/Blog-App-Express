import { NextFunction, Response } from "express";
import { IAuthRequest } from "../../../Types/types";
declare class BlogService {
    private Blog;
    AddBlog: (req: IAuthRequest, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>>>;
    GetBlogs: (req: IAuthRequest, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>>>;
}
declare const _default: BlogService;
export default _default;
//# sourceMappingURL=blog.services.d.ts.map