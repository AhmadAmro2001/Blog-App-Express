import jwt from "jsonwebtoken";
export declare const generateToken: (payload: jwt.JwtPayload, Secret: jwt.Secret, options: jwt.SignOptions) => string;
export declare const verifyToken: (token: string, Secret: jwt.Secret) => jwt.JwtPayload;
//# sourceMappingURL=token.utils.d.ts.map