"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const types_1 = require("../../Types/types");
const userSchema = new mongoose_1.default.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    role: {
        type: String,
        enum: types_1.Role,
    }
}, {
    timestamps: true,
    toObject: {
        virtuals: true
    },
    toJSON: {
        virtuals: true
    }
});
const userModel = mongoose_1.default.models.User || mongoose_1.default.model("User", userSchema);
exports.userModel = userModel;
userSchema
    .virtual('username')
    .get(function () {
    return `${this.firstName} ${this.lastName}`;
})
    .set(function (value) {
    const [firstName, lastName] = value.split(' ');
    this.firstName = firstName.toUpperCase();
    this.lastName = lastName.toUpperCase();
});
//# sourceMappingURL=user.model.js.map