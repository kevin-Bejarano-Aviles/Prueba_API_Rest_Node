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