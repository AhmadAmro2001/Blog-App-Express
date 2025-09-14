"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validationMiddleware = void 0;
const error_handling_middleware_1 = require("./error-handling.middleware");
const validationMiddleware = (Schema) => {
    return (0, error_handling_middleware_1.asyncHandler)(async (req, res, next) => {
        const schemaKeys = Object.keys(Schema);
        const validationErrors = [];
        for (const key of schemaKeys) {
            const schema = Schema[key];
            if (!schema) {
                continue;
            }
            const { error } = schema.validate(req[key], { abortEarly: false });
            if (error) {
                validationErrors.push({
                    key: key,
                    errors: error.details.map((detail) => detail.message)
                });
            }
        }
        if (validationErrors.length) {
            return res.status(400).json({
                message: "Validation Error",
                errors: validationErrors
            });
        }
        next();
    });
};
exports.validationMiddleware = validationMiddleware;
//# sourceMappingURL=validation.middleware.js.map