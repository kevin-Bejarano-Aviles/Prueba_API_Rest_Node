const {check,body}= require('express-validator');
const UserModel = require('../models/User');
const bcrypt = require('bcrypt');
module.exports = [
    body('beforePass').custom((value,{req})=>{
        return UserModel.findOne({
            where:{
                id:req.params.id
            }
        })
        .then(usuario=>{
            if(usuario){
                if(!bcrypt.compareSync(usuario.pass,value)){
                    return Promise.reject('Error, el password actual es incorrecto');        
                }
                
            }
        });
    }),
    check('pass').isStrongPassword().withMessage('Error,la contraseña debe contener 8 carateres minimo, una mayuscula una minuscula, numeros y un signo'),
    body('pass2').custom((value,{req})=>{
        if(value === req.body.pass){
            return true
        }else{
            return false
        }
    }).withMessage('Las contraseñas nuevas debe coincidir'),
];