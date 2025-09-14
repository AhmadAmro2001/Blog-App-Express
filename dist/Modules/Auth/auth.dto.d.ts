import { Role } from "../../Types/types";
export interface ISignUp {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    role: Role;
}
export interface ISignIn {
    email: string;
    password: string;
}
//# sourceMappingURL=auth.dto.d.ts.map