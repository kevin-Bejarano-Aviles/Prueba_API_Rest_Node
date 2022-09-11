const path  = require('path');
const db = require(path.join('..','database','db.js'));//obtenemos la base de datos 
// const ProductModel = require('./Products'); 

const { DataTypes } = require('sequelize');//requerimos DataTypes desde sequelize

const UserModel = db.define({
    id: {type:DataTypes.INTEGER},
    userName: {type:DataTypes.STRING},
    fullName: {type:DataTypes.STRING},
    email: {type:DataTypes.STRING},
    pass: {type:DataTypes.STRING},
    avatar: {type:DataTypes.STRING},
    status: {type:DataTypes.TINYINT},
    rol: {type:DataTypes.STRING},
});
// UserModel.hasMany(ProductModel,{foreingKey:"userId"}); 
module.exports = UserModel;//exportamos los datos
