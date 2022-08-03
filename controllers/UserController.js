const path = require('path');
let UserModel = require('../models/User.js');

module.exports = {
    /* Vista crear un usuario */
    userRegister:async (req,res) => {
        /* res.json('Pagina de registro'); */
        try {
            const heores = await UserModel.findAll();
            res.json(heores);
        } catch (error) {
            res.json({message:error.message});
        }
    },

    /* Proceso de registro  */
    processRegister: async (req,res) => {
        try {
           
            await UserModel.create(req.body);

            res.json({
                "message":"El usuario a sido creado"});
        } catch (error) {
            res.json({
                "message": error.message
            })
        }
    },

    /* Vista iniciar usuario */
    userLogin: (req,res) => {
        res.json("Pagina de login del usuario")
    },

    processLogin: async (req,res) => {
        try {
            const user = UserModel.findOne({
                where: {
                    email: req.body.email
                }
            })
            res.json({
                "message": "Usuario encontrado"
            });
            if (user.email == req.body.email && user.pass == req.body.pass) {
                res.json({
                    "message": "ingreso exitoso"
                });
            } else {
                res.json({
                    "message": "error, credenciales invalidas"
                })
            }

        } catch (error) {
            res.json({
                "message": error.message
            })
        }
    },

    /* Editar un usuario */
    userEdit: (req,res) => {

        res.json("edit User")
    },
    /* eliminar usuaio */
    userDeleteProcess: (req,res) => {
        res.json("delete user")
    },
}
