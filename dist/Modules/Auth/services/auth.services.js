"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_service_1 = __importDefault(require("../../../DB/database.service"));
const models_1 = require("../../../DB/models");
const bcrypt_1 = require("bcrypt");
const Utiles_1 = require("../../../Utiles");
const uuid_1 = require("uuid");
class AuthService {
    User = new database_service_1.default(models_1.userModel);
    SignUp = async (req, res, next) => {
        const { firstName, lastName, email, password, role } = req.body;
        const user = await this.User.findOne({ email });
        if (user) {
            return next(new Error("User already exists", { cause: 409 }));
        }
        const hashedPassword = await (0, bcrypt_1.hash)(password, 10);
        const newUser = await this.User.create({
            firstName,
            lastName,
            email,
            password: hashedPassword,
            role
        });
        return res.status(201).json({ message: "User created successfully", newUser });
    };
    SignIn = async (req, res, next) => {
        const { email, password } = req.body;
        const user = await this.User.findOne({ email });
        if (!user) {
            return next(new Error("User not found", { cause: 404 }));
        }
        const isPasswordMatched = (0, bcrypt_1.compareSync)(password, user.password);
        if (!isPasswordMatched) {
            return next(new Error("Invalid credentials", { cause: 401 }));
        }
        const token = (0, Utiles_1.generateToken)({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1d", jwtid: (0, uuid_1.v4)() });
        return res.json({ message: "User signed in successfully", token });
    };
    GetProfile = async (req, res, next) => {
        const user = await this.User.findById(req.authUser?._id);
        return res.json({ message: "User profile fetched successfully", user });
    };
}
exports.default = new AuthService();
//# sourceMappingURL=auth.services.js.map