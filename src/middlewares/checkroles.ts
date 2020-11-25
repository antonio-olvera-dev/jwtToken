import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken"
import { jsonSecret } from "../config/config.json";
import { Users } from "../models/products.model";
import { Roles } from "../models/role.model";



export const checkRoles = async (req: Request, res: Response, next: NextFunction) => {

     const token = <string>req.headers["authoritation"];
     
    try {

        let jwPayload: any = jwt.verify(token, jsonSecret);

        const user: any = await Users.findAll({

            where: { email: jwPayload.email, password: jwPayload.password },
            include: Roles
            

        }
        );
        if (user[0].Role.name === 'admin') {
            
        } else {
            throw new Error("No eres admin");
        }

         


    } catch (error) {

        res.sendStatus(401);

    }
    next();
}

