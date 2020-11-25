import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken"
import { Users } from "../models/products.model";
import { jsonSecret } from "./../config/config.json";



export const checkJwkt =async (req: Request, res: Response, next: NextFunction) => {

    const token = <string>req.headers["authoritation"];

    try {

        let jwPayload:any = jwt.verify(token, jsonSecret);
        const user:any = await Users.findAll( {
            
            where:{email:jwPayload.email}
            ,raw:true}
            );

        

        if (user[0].password === jwPayload.password && jwPayload.email ===user[0].email ) {
            console.log(user[0].password, jwPayload.password);
            res.send(token);
        } else {
            res.status(404)
            console.log('error');
            throw "El usuario o contraseña son incorrectas";
        }

        

      
        
    } catch (error) {

        res.sendStatus(401);

    }
    next();
}

