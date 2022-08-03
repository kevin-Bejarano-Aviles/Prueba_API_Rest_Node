const path  = require('path');
const db = require(path.join('..','database','db.js'));


const { DataTypes } = require('sequelize');

const UserModel = db.define('users',{
    userName : {type: DataTypes.STRING},
    names : {type: DataTypes.STRING},
    surnames: {type: DataTypes.STRING},
    email : {type: DataTypes.STRING},
    pass : {type: DataTypes.STRING}

})
module.exports = UserModel;
