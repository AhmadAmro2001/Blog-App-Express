import {connect} from 'mongoose'



export const databaseConnection = async()=>{
    return await connect(process.env.MONGO_URI as string)
    .then(()=>console.log("Database connected"))
    .catch((err)=>console.log(err))
}