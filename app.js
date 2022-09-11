const express = require("express"); //importamos el modulo de express
const cors = require("cors");//para el manejo de errores
const db = require('./database/db');
const morgan = require('morgan');
const methodOverride = require('method-override');//para poder hacer put o delete
const sesion = require('express-session');//se lo quitara y se utilizara json web token
const path = require('path');


//utilizamos path para las rutas
 const indexRoutes = require("./routes/index.js"); 
const userRoutes  = require("./routes/user.js"); //rutas y metodos desde lo importado


const app = express();//a la variable app le asignamos el metodo de express para levantar el servidor

const port = 3001;//puerto que se usara en el proyecto

/* app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs') */

//para procesar datos enviados desde forms NOTA: ESTA WEA TIENE QUE IR ANTES DE LLAMAR A LAS RUTAS SI O SI
app.use(methodOverride('_method'));
/* app.use(morgan('dev')); */ //te trae en la consola los metodos que usa
app.use(cors());
app.use(express.urlencoded({extended:false}));//para poder hacer peticiones post 
app.use(express.json());//para que pueda leer json con post creo
app.use(express.static(path.join(__dirname,'public')));
//no se usara session
/* app.use(sesion({
    secret:"Nuestro Secreto",
    resave:true,
    saveUninitialized: true,
    cookie: {
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 2,
    }   
})); */



/* app.use('/',indexRoutes); *//* al entrar a "/" esta podra tener "x" cantidad de rutas que vengan desde lo pasado por indexRoutes */
app.use('/user',userRoutes);/* al entrar a "/user" esta podra tener "x" cantidad de rutas que vengan desde lo pasado por userRoutes */



try {
    db.authenticate();
    console.log("Conexion extiosa, base de datos conectada\nFelicidades !! :D");
} catch (error) {
    console.log(`el error en conexion es: ${error}\nVales madres D:`);    
}


app.listen(port,()=>{//utilizamos el metodo listen para saber si el servidor esta funcionando
    console.log(`
    ***************************************
    Servidor funcionando en el puerto ${port}
    link ---->>> http://localhost:${port}
    ***************************************
    `);
})


/*             await db.query("SET @counter = 0;")
            await db.query("UPDATE users SET id = @counter := @counter + 1 ORDER BY id") */