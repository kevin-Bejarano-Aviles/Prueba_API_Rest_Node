import express from "express"; //importamos el modulo de express
import { index } from "../controllers/IndexController.js";/* se le llaman a todos los metodos de la carpeta controller */
const router = express.Router();//le asignamos a la constante router el metodo express.Router() para poder usar los metodos HTTP 

/* pagina principal */
router.get('/',index);

//pagina de nosotros

//pagina de acerca de la empresa

export default router;//exportamos la constante router