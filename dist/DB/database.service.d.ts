import { FilterQuery, Model, Types } from "mongoose";
declare class DatabaseService<TDocument> {
    private __model;
    constructor(__model: Model<TDocument>);
    create(document: Partial<TDocument>): Promise<TDocument>;
    findOne(filters: FilterQuery<TDocument>): Promise<TDocument | null>;
    findById(id: Types.ObjectId): Promise<TDocument | null>;
    find(filters?: FilterQuery<TDocument>): Promise<TDocument[]>;
}
export default DatabaseService;
//# sourceMappingURL=database.service.d.ts.map