
import  express  from "express";
import { shoppingRoutes } from "./routes/shopping.routes";
const app = express();

app.set('port', 4100);



app.use(express.json());
app.use('/shopings', shoppingRoutes.router);





app.listen(app.get('port'),()=>{

console.log(`servidor levantado en https://localhost:${app.get('port')}`);

});
