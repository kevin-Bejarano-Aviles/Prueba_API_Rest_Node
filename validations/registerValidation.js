const {check,body} = require('express-validator');
const UserModel = require('../models/User');

 module.exports = [
    check('userName').notEmpty().withMessage('El userName no tiene que estar vacio'),
    check('userName').isLength({min:2}).withMessage('El userName tiene que tener un minimo de 2 caracteres'),
    body('userName').custom(value=>{
        return UserModel.findOne({where:{userName:value}})
        .then(usuario=>{
            if(usuario){
                return Promise.reject('Error el userName ya se encuentra registrado');
            }
        });
    }),
    check('fullName').notEmpty().withMessage('El Nombre completo no tiene que estar vacio'),
    check('fullName').isLength({min:8}).withMessage('El Nombre completo tiene que tener nombre y apellido completos'),
    check('email').isEmail().withMessage('El campo debe de ser un email valido'),
    body('email').custom(value=>{
        return UserModel.findOne({
            where:{
                email:value
            }
        })
        .then(usuario=>{
            if(usuario){
                return Promise.reject('Error, el email ya esta en la base de datos');        
            }
        });
    }),
    // As12345$ 
    check('pass').isStrongPassword().withMessage('Error,la contraseña debe contener 8 carateres minimo, una mayuscula una minuscula, numeros y un signo'),
    body('pass2').custom((value,{req})=>{
        if(value === req.body.pass){
            return true
        }else{
            return false
        }
    }).withMessage('Las contraseñas debe coincidir'),
    body('avatar').custom((value,{req})=>{
        value = req.files[0]
        if(value){
            if(value.mimetype == 'image/png' || value.mimetype == 'image/jpg' || value.mimetype == 'image/jpeg'){
                // console.log("si"); 
                return true
            }else{
                // console.log("nou"); 
                return false
            }
        }else{
            return true
        }
        
    })
    .withMessage("El formato de la imagen debe ser: jpg, jpeg o png ")
] 