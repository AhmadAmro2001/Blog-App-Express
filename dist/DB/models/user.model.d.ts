import mongoose from "mongoose";
import { IUser } from "../../Types/types";
declare const userModel: mongoose.Model<any, {}, {}, {}, any, any> | mongoose.Model<IUser, {}, {}, {}, mongoose.Document<unknown, {}, IUser, {}, {}> & IUser & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
}, any>;
export { userModel };
//# sourceMappingURL=user.model.d.ts.map