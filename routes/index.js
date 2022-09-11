/* const express =require("express") ; //importamos el modulo de express
const path = require('path');
const { index } =require(path.join('..','controllers','IndexController.js'));
const router = express.Router();//le asignamos a la constante router el metodo express.Router() para poder usar los metodos HTTP 

router.get('/',index);

//pagina de nosotros

//pagina de acerca de la empresa
const { crearProducto, asociarProducto, mostrarAsociacion } =require('../controllers/relaciones');
router.get('/a',crearProducto);
router.get('/b/:id',asociarProducto)
router.get('/c/:id',mostrarAsociacion)
module.exports = router;//exportamos la constante router
 */