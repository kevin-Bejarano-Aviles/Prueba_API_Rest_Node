# NOTAS DE LAS VERSIONES

## Version 1.0.0
- Se inicializo el proyecto con npm init.
- Se instalo express con npm install express, a su ves trajo la carpeta node_modules. Instalarlo con "npm install" para descargar express y otras dependencias a futuro
- Se crearon las carpetas routes y controllers.
- En la carpeta routes se creo el archivo "index.js" que contendra las rutas para que el usuario pueda navegar sin estar logeado
- En la carpeta routes se creo el archivo "user.js" que contendra las rutas para que el usuario pueda registrarse e iniciar sesion
- En la carpeta controlerrs se creo el archivo "IndexController.js" que contendra los metodos que usara el archivo "index.js" en la carpeta routes.
- En la carpeta controlerrs se creo el archivo "UserController.js" que contendra los metodos que usara el archivo "user.js" en la carpeta routes.
### Complicaciones 
- Configurar que vamos a utilizar "import" en el package.json
```javascript
{//JSON PACKAGE
    "name": "allintegrado",
    "version": "1.0.0",
    "main": "app.js",
    "type": "module",//<------- Para poder utilizar import o export o te saldra un error al ejecutar 
}
```

## Version 1.0.1
- Se instalo las dependencias de mysql2, sequelize y cors
- Se creo las carpetas "database" y "models"
- Se creo la base de datos en Mysql Workbench + una tabla "users"
- En el archivo "db.js" de la carpeta database se configuro la base de datos con sequelize.
- En el archivo "User.js" de la carpeta models se configuro la tabla users con sequelize.
- En UserController.js se implemento sequelize para el registro de un usuario
- Se implemento el modulo bcrypt y se encriptaron las contraseñas
- Se instalo el modulo ejs
- Se implementaron vistas dinamicas con el motor de vistas ejs
- Se logro obetener la vista con la funcionalidas del CRUD(Create,Read,Update,Delete).
- La parte back end ya no parece mas una api (cosa a preguntar)
### Complicaciones 

#### Complicacion 1
- al parecer no se puede utilizar path con los import como en este caso
```javascript
import indexRoutes from path.join('.','routes','index.js') ;  //tira error

```
tal parece que en node se usa mas require que import/export asi que queda consultar a profesores,y al no poder avanzar me vere obligado a usar require que creo que es lo correcto

#### Complicacion 2
- es necesario la programacion estructurada, sobretodo para la app.js ya que el incombeniente que tuve fue :
```javascript

app.use(cors())
app.use(express.urlencoded({extended:false}));
app.use(express.json());
//estas tres lienas de codigo tienen que estar antes de llamar a las rutas o sinos no van a funcionar

app.use('/',indexRoutes);
app.use('/user',userRoutes);

```
### Complicacion 3 
- Se necesitan un paquete para manegar los metodos HTTP Put y Delete 
```javascript
const methodOverride = require('method-override');//para poder hacer put o delete
app.use(methodOverride('_method'));

```