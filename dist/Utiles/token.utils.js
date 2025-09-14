"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = exports.generateToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const generateToken = (payload, Secret, options) => {
    return jsonwebtoken_1.default.sign(payload, Secret, options);
};
exports.generateToken = generateToken;
const verifyToken = (token, Secret) => {
    return jsonwebtoken_1.default.verify(token, Secret);
};
exports.verifyToken = verifyToken;
//# sourceMappingURL=token.utils.js.map