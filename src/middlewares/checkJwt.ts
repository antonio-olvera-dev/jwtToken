import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken"
import { jsonSecret } from "./../config/config.json";



export const checkJwkt = (req: Request, res: Response, next: NextFunction) => {

    const token = <string>req.headers["authoritation"];

    try {

        let jwPayload = jwt.verify(token, jsonSecret);

        console.log(jwPayload);
        
    } catch (error) {

        res.sendStatus(401);

    }
    next();
}

