import { ObjectSchema } from "joi";
import { NextFunction, Request, Response } from "express";
export declare const validationMiddleware: (Schema: Record<string, ObjectSchema>) => (req: Request, res: Response, next: NextFunction) => void;
//# sourceMappingURL=validation.middleware.d.ts.map