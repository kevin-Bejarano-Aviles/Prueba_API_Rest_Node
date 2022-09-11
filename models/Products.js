const db = require('../database/db');
/* const Usermodel = require('./User'); */
const {DataTypes} = require('sequelize');

const ProductModel = db.define('products',{
    id: {type:DataTypes.INTEGER},
    productName:{type:DataTypes.STRING},
    userId:{type:DataTypes.INTEGER}

})
/* ProductModel.belongsTo(Usermodel,{foreignKey:"userId"}) */

module.exports = ProductModel