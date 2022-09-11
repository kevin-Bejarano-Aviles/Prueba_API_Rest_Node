const {check,body}= require('express-validator');
const UserModel = require('../models/User');
module.exports =[
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
    check('email').isEmail().withMessage('El campo tiene que ser un email valido'),
    body('email').custom((value,{req})=>{
        return UserModel.findOne({where:{email:value}})
        .then(result=>{
            if(result && result.id != req.params.id){
                return Promise.reject('El email ya esta registrado')
            }
        })
    }),
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