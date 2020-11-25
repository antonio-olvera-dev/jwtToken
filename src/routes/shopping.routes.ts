import { Router } from "express";
import { shoppingController } from "../controllers/shopping.controllers";


class ShoppingRoutes {

    public router: Router = Router();

    constructor() {


        this.router.get('/', shoppingController.getAll);
        this.router.post('/', shoppingController.setProducts);

    }

}


export const shoppingRoutes = new ShoppingRoutes();
