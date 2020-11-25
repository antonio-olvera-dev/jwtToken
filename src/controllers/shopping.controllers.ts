import { Request, Response } from "express";


import jwt from "jsonwebtoken"
import  config  from "./../config/config.json";

class ShoppingController {




  public async getKeys(req: Request, res: Response) {

    try {

      const token = jwt.sign(

        {email: req.body.email, password:req.body.password}, 
        config.jsonSecret,
        {expiresIn:"1h"}
        
        );
     
        
        res.send(token);

    
      

    } catch (error) {

      console.log(error);
      res.send(error);
    }

  }




  








}

export const shoppingController = new ShoppingController();