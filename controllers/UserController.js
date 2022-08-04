const path = require('path');
const UserModel = require('../models/User.js');

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
        const {userName,names,surnames,email,pass}=req.body
        try {
           
            await UserModel.create({
                userName: userName,
                names:names,
                surnames:surnames,
                email:email,
                pass:pass
            });

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
/* Proceso de login  */
    processLogin: async (req,res) => {//"kevin@gmail.com"
        const {email,pass} = req.body
        try {
            if(!req.body){
                res.json("Tiene que llenar los campos");
            }else{
                const user = await UserModel.findOne({
                    where: {
                        email:email
                    }
                })
                if(!user){// eso o user==null 
                    res.json({"message":"Credenciales invalidas"})
                }else{
                    if(user.pass == pass){
                        res.json({"message":"inicio de sesion exitosa"});
                    }else{
                        res.json({"message":"Credenciales invalidas"})
                    }
                   
                }
            }
        } catch (error) {
            res.json({
                "message": error.message
            })
        }
    },

    /* Vista de edicion de usuario */
    userEdit: async(req,res) => {
        try {
            const user = await UserModel.findByPk(req.params.id);
            res.json({"message":`pagina de edicion de usuario N° ${req.params.id}`,user})    
        } catch (error) {
            res.json({
                "message": error.message
            })
        }

    },
    /*Proceso de edicion de usuario */
    processEditUser: async(req,res)=>{
        const {id} = req.params;
        const {userName,names,surnames,email} = req.body
        try {
            const user = await UserModel.update({
                userName:userName,
                names:names,
                surnames:surnames,
                email:email
            },{
                where:{
                    id:id
                }
            })  
        res.json("Usuario editado")
        } catch (error) {
            res.json({
                "message": error.message
            })
        }
    },
    /* eliminar usuaio */
    userDeleteProcess: async (req,res) => {
        try {
            await UserModel.destroy({
                where:{
                    id: req.params.id
                }
            })
            res.json({"message": "usuario eliminado"})
        
        } catch (error) {
            res.json({message:error.message})            
        }
        
    }
}
