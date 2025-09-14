import { NextFunction, Request, Response } from "express";
import { IError } from "../Types/types";
export declare const asyncHandler: (fn: Function) => (req: Request, res: Response, next: NextFunction) => void;
export declare const globalHandler: (err: IError, req: Request, res: Response, next: NextFunction) => void;
//# sourceMappingURL=error-handling.middleware.d.ts.map