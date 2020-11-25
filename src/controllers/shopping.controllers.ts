import { Request, Response } from "express";


import jwt from "jsonwebtoken"
import { Users } from "../models/products.model";
import  config  from "./../config/config.json";

class ShoppingController {




  public async getKeys(req: Request, res: Response) {

    try {

      const token = jwt.sign(

        {email: req.body.email, password:req.body.password}, 
        config.jsonSecret,
        {expiresIn:"1h"}
        
        );
     
        const user:any = await Users.findAll( {
            
          where:{email:req.body.email, password:req.body.password}
          ,raw:true}
          );

      

      if (user[0].password === req.body.password && req.body.email ===user[0].email ) {
        
        res.send(token)
        
      } else {
         // res.sendStatus(404)
          console.log('error');
          throw new Error("El usuario o contraseña son incorrectas");
      }


    
    
    } catch (error) {

      console.log(error);
      res.send(error);
    }

  }




  








}

export const shoppingController = new ShoppingController();