import mongoose from "mongoose";
import { IBlog } from "../../Types/types";
declare const blogModel: mongoose.Model<any, {}, {}, {}, any, any> | mongoose.Model<IBlog, {}, {}, {}, mongoose.Document<unknown, {}, IBlog, {}, {}> & IBlog & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
}, any>;
export { blogModel };
//# sourceMappingURL=blog.model.d.ts.map