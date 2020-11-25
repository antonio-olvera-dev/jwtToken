import { Router } from "express";
import { shoppingController } from "../controllers/shopping.controllers";
import { checkJwkt } from "../middlewares/checkJwt";


class ShoppingRoutes {

    public router: Router = Router();

    constructor() {


        this.router.post('/', shoppingController.getKeys);



    }

}


export const shoppingRoutes = new ShoppingRoutes();
