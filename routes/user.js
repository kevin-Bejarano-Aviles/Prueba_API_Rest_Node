import express from "express"; //importamos el modulo de express
import { userLogin, userRegister } from "../controllers/UserController.js";
const router = express.Router();//le asignamos a la constante router el metodo express.Router() para poder usar los metodos HTTP


//Registro del usuario 
router.get('/register',userRegister);


//Inicio de sesion del usuario
router.get('/login',userLogin)

//edicion del usuario

//eliminacion de usuario(su cuenta)

export default router;//exportamos la constante router