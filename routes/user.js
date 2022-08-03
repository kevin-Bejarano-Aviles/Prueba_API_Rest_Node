const express = require("express"); //importamos el modulo de express
const path = require('path');
const { userRegister, processRegister, userLogin, processLogin } = require('../controllers/UserController');
const router = express.Router();//le asignamos a la constante router el metodo express.Router() para poder usar los metodos HTTP


//Registro del usuario 
router.get('/register',userRegister);
router.post('/register',processRegister);

//Inicio de sesion del usuario
router.get('/login',userLogin);
router.post('/login',processLogin);//process
//edicion del usuario

//eliminacion de usuario(su cuenta)

module.exports = router;//exportamos la constante router