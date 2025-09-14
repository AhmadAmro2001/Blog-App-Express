import express  from "express";

import {config} from "dotenv";
import { controllerHandler } from "./Utiles";
import { databaseConnection } from "./DB/connection";
config();

// let dbPromise: Promise<void> | null = null;
// function connectOnce() {
//     if (!dbPromise) dbPromise = databaseConnection();
//     return dbPromise;
//   }

const app:express.Application = express();
const port:number | string = process.env.PORT || 3000;
databaseConnection();
controllerHandler(app);


app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
})

// const handler = serverless(app);
// export default async (req: any, res: any) => {
//   await connectOnce();      // ensure DB is ready
//   return handler(req, res); // delegate to Express-as-a-function
// };
