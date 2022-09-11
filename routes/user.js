const express = require("express"); //importamos el modulo de express
const router = express.Router();
const { userRegister, userLogin, userProfile, editUser, editPassUser, userLogOut, deleteUser } = require('../controllers/userController');

//Registro del usuario 
router.post('/register',userRegister);
//logueo de usuario
router.post('/login',userLogin);
//ver Perfil
router.get('/:id',userProfile);
//Editar Perfil
router.put('/edit/:id',editUser);
//editar password
router.put('/editPass/:id',editPassUser);
//logOut
router.get('/logOut',userLogOut);
//Delete user
router.delete('/:id',deleteUser);


module.exports = router;//exportamos la constante router