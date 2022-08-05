const express = require("express"); //importamos el modulo de express
const cors = require("cors");//para el manejo de errores
const path = require("path");
const db = require('./database/db');
const morgan = require('morgan');
const methodOverride = require('method-override');//para poder hacer put o delete

//utilizamos path para las rutas
const indexRoutes = require("./routes/index.js"); 
const userRoutes  = require("./routes/user.js");//rutas y metodos desde lo importado


const app = express();//a la variable app le asignamos el metodo de express para levantar el servidor

const port = 3001;//puerto que se usara en el proyecto

app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs')

//para procesar datos enviados desde forms NOTA: ESTA WEA TIENE QUE IR ANTES DE LLAMAR A LAS RUTAS SI O SI
app.use(methodOverride('_method'));
app.use(morgan('dev'));
app.use(cors())
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(express.static(path.join(__dirname,'public')));


app.use('/',indexRoutes);/* al entrar a "/" esta podra tener "x" cantidad de rutas que vengan desde lo pasado por indexRoutes */
app.use('/user',userRoutes);/* al entrar a "/user" esta podra tener "x" cantidad de rutas que vengan desde lo pasado por userRoutes */





app.listen(port,()=>{//utilizamos el metodo listen para saber si el servidor esta funcionando
    console.log(`
    ***************************************
    Servidor funcionando en el puerto ${port}
    link ---->>> http://localhost:${port}
    ***************************************
    `);
})


