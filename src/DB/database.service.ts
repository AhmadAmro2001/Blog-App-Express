import { FilterQuery, Model, Types } from "mongoose";

class DatabaseService<TDocument> {
    constructor(private __model:Model<TDocument>){
        
    }

    async create(document:Partial<TDocument>):Promise<TDocument>{
        return await this.__model.create(document)
    }

    async findOne(
        filters: FilterQuery<TDocument>
    ):Promise<TDocument | null>{
        return await this.__model.findOne(filters)
    }

    async findById(
        id:Types.ObjectId
    ):Promise<TDocument | null>{
        return await this.__model.findById(id)
    }

    async find(
        filters?: FilterQuery<TDocument>
    ):Promise<TDocument[]>{
        return await this.__model.find(filters|| {})
    }

    
}


export default DatabaseService