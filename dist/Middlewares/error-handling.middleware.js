"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.globalHandler = exports.asyncHandler = void 0;
// local error
const asyncHandler = (fn) => {
    return (req, res, next) => {
        fn(req, res, next).catch((err) => {
            next(err);
        });
    };
};
exports.asyncHandler = asyncHandler;
// global error handler
const globalHandler = (err, req, res, next) => {
    const errorStatus = err.status || err.cause || 500;
    res.status(errorStatus).json({
        message: "Something went wrong",
        error: err.message
    });
};
exports.globalHandler = globalHandler;
//# sourceMappingURL=error-handling.middleware.js.map