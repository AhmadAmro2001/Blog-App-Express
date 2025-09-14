"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseConnection = void 0;
const mongoose_1 = require("mongoose");
const databaseConnection = async () => {
    return await (0, mongoose_1.connect)(process.env.MONGO_URI)
        .then(() => console.log("Database connected"))
        .catch((err) => console.log(err));
};
exports.databaseConnection = databaseConnection;
//# sourceMappingURL=connection.js.map