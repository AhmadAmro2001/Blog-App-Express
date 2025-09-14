"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authController = void 0;
const express_1 = require("express");
const auth_services_1 = __importDefault(require("./services/auth.services"));
const Middlewares_1 = require("../../Middlewares");
const auth_schema_1 = require("./auth.schema");
const authController = (0, express_1.Router)();
exports.authController = authController;
authController.post('/signup', (0, Middlewares_1.validationMiddleware)(auth_schema_1.signUpSchema), (0, Middlewares_1.asyncHandler)(auth_services_1.default.SignUp));
authController.post('/signin', (0, Middlewares_1.asyncHandler)(auth_services_1.default.SignIn));
authController.get('/profile', (0, Middlewares_1.authMiddleware)(), (0, Middlewares_1.asyncHandler)(auth_services_1.default.GetProfile));
//# sourceMappingURL=auth.controller.js.map