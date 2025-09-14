"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = void 0;
const _1 = require(".");
const Utiles_1 = require("../Utiles");
const database_service_1 = __importDefault(require("../DB/database.service"));
const models_1 = require("../DB/models");
const authMiddleware = () => {
    const User = new database_service_1.default(models_1.userModel);
    return (0, _1.asyncHandler)(async (req, res, next) => {
        const { accesstoken } = req.headers;
        if (!accesstoken) {
            return res.status(401).json({ message: "Unauthorized" });
        }
        const decodedData = (0, Utiles_1.verifyToken)(accesstoken, process.env.JWT_SECRET);
        const user = await User.findById(decodedData.id);
        if (!user) {
            return res.status(401).json({ message: "Please signup first" });
        }
        req.authUser = user;
        next();
    });
};
exports.authMiddleware = authMiddleware;
//# sourceMappingURL=authentication.middleware.js.map