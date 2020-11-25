import { Request, Response } from "express";
import { Clients } from "../models/clients.model";
import { Products } from "../models/products.model";
import { Shopings } from "../models/shopings.model";

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




  public async getAll(req: Request, res: Response) {

    try {

  

      const shop = await Clients.findAll({

        include: Products

      });

      res.send(shop);

    } catch (error) {
      console.log(error);
      res.send(error);
    }

  }


  public async setProducts(req: Request, res: Response) {

    try {


      

      const shop = await Shopings.create(req.body);

      res.send(shop);

    } catch (error) {

      console.log(error);
      res.send(error);
    }

  }







}

export const shoppingController = new ShoppingController();