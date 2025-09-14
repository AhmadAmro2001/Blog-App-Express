"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DatabaseService {
    __model;
    constructor(__model) {
        this.__model = __model;
    }
    async create(document) {
        return await this.__model.create(document);
    }
    async findOne(filters) {
        return await this.__model.findOne(filters);
    }
    async findById(id) {
        return await this.__model.findById(id);
    }
    async find(filters) {
        return await this.__model.find(filters || {});
    }
}
exports.default = DatabaseService;
//# sourceMappingURL=database.service.js.map