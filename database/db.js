import { Sequelize } from "sequelize";


//instancio una nueva dataBASE en los parentesis va el nombre de la base de datos creada, el segundo es el nombre de nuestro usuario , el tercero la contraseña y luego un objeto que tiene el host, el dialect que es en que database se esta creando y por ultimo el puerto, luego lo exportas
const db = new Sequelize("elearningpropio","root","",{/* creo que esto se va  tener que olcultar a futuro */
    hots:"localhost",
    dialect: "mysql",
    port: 3306
})

export default db;/* exportamos la constante db */
