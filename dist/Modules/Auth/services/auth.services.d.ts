import { NextFunction, Request, Response } from "express";
import { IAuthRequest } from "../../../Types/types";
declare class AuthService {
    private User;
    SignUp: (req: Request, res: Response, next: NextFunction) => Promise<void | Response<any, Record<string, any>>>;
    SignIn: (req: Request, res: Response, next: NextFunction) => Promise<void | Response<any, Record<string, any>>>;
    GetProfile: (req: IAuthRequest, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>>>;
}
declare const _default: AuthService;
export default _default;
//# sourceMappingURL=auth.services.d.ts.map