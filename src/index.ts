
import  express  from "express";
import { checkJwkt } from "./middlewares/checkJwt";
import { shoppingRoutes } from "./routes/shopping.routes";
import { usersRoutes } from "./routes/users.routes";
const app = express();

app.set('port', 4000);



app.use(express.json());
app.use('/key', shoppingRoutes.router);
app.use('/users', usersRoutes.router);


app.listen(app.get('port'),()=>{

console.log(`servidor levantado en https://localhost:${app.get('port')}`);

});
