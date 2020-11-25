import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken"
import { Users } from "../models/products.model";
import { jsonSecret } from "./../config/config.json";



export const checkJwkt = async (req: Request, res: Response, next: NextFunction) => {

    const token = <string>req.headers["authoritation"];

    try {


        
        let jwPayload:any = jwt.verify(token, jsonSecret);

        
        
    } catch (error) {

        res.sendStatus(401);

    }
    next();
}

