import { Request, Response } from "express";
import { Clients } from "../models/clients.model";
import { Products } from "../models/products.model";
import { Shopings } from "../models/shopings.model";



class ShoppingController {


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


  public async getKeys(req: Request, res: Response) {

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