import { Application ,json ,NextFunction,Request,Response} from "express";
import * as controllers from "../Modules";
import { globalHandler } from "../Middlewares";
export const controllerHandler = (app:Application)=>{
    
    app.use(json());

    app.use('/auth',controllers.authController);
    app.use('/blog',controllers.blogController);


    app.get("/",(req:Request,res:Response,next:NextFunction)=>{
        res.status(200).send("Hello World!")
    })



    app.use((req:Request, res:Response , next:NextFunction) => {
        res.status(404).json({ message: 'Route not found.' });
      });



    // global handler middleware
    app.use(globalHandler)
}