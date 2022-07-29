import express from "express"; //importamos el modulo de express
import indexRoutes from "./routes/index.js";
import userRoutes from "./routes/user.js";

const app = express();//a la variable app le asignamos el metodo de express para levantar el servidor

const port = 3000;//puerto que se usara en el proyecto

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


