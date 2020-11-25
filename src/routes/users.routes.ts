import { Router } from "express";
import { shoppingController } from "../controllers/shopping.controllers";
import { usersController } from "../controllers/uses.controllers";
import { checkJwkt } from "../middlewares/checkJwt";
import { checkRoles } from "../middlewares/checkroles";


class UsersRoutes {

    public router: Router = Router();

    constructor() {

        this.router.get('/',[checkJwkt], usersController.getUser);
        this.router.get('/all',[checkJwkt, checkRoles], usersController.getUsers);
        this.router.post('/', usersController.setUser);

    }

}


export const usersRoutes = new UsersRoutes();
