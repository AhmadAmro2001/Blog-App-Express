import express  from "express";
import {config} from "dotenv";
import { controllerHandler } from "./Utiles";
import { databaseConnection } from "./DB/connection";
config();


const app:express.Application = express();
const port:number | string = process.env.PORT || 3000;
databaseConnection();
controllerHandler(app);


app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
})