import { Request, Response } from "express";
import { Users } from "../models/products.model";

class UsersController {




    public async getUsers(req: Request, res: Response) {

        try {
            const us = await Users.findAll( {raw:true});
            res.send(us)
        } catch (error) {

            res.sendStatus(501);
        }


    }




    public async setUser(req: Request, res: Response) {

        try {
            const us = await Users.create(req.body);
            res.send(us)
        } catch (error) {

            res.sendStatus(501);
        }


    }




}

export const usersController = new UsersController();