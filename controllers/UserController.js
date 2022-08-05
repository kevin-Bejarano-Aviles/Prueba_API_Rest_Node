const path = require('path');
const bcrypt = require('bcrypt');
const UserModel = require('../models/User.js');

module.exports = {
    /* Vista crear un usuario */
    userRegister:async (req,res) => {
        res.render('register',{
            title:"Pagina de registro"
        })
        /* try {
            const heores = await UserModel.findAll();
            res.json(heores);
        } catch (error) {
            res.json({message:error.message});
        } */
    },

    /* Proceso de registro  */
    processRegister: async (req,res) => {
        const {userName,names,surnames,email,pass}=req.body;
        
        try {
            let passHash = bcrypt.hashSync(String(pass),10);   
            await UserModel.create({
                userName: userName,
                names:names,
                surnames:surnames,
                email:email,
                pass:passHash
            });

            /* res.json({
                "message":"El usuario a sido creado"}); */
            res.redirect('/user/login');
        } catch (error) {
            res.json({
                "message": error.message
            })
        }
    },

    /* Vista iniciar usuario */
    userLogin: (req,res) => {
        /* res.json("Pagina de login del usuario") */
        res.render('login',{
            title:"Pagina de login",
            error:false
        })
    },
/* Proceso de login  */
    processLogin: async (req,res) => {//"kevin@gmail.com"
        const {email,pass} = req.body
        try {
            if(email == "" && pass == ""){
                /* res.json("Tiene que llenar los campos"); */
                res.render('login',{
                    title:"Pagina de login",
                    error:true,
                    message: "Tiene que llenar los cambios"
                    
                })
            }else{
                const user = await UserModel.findOne({
                    where: {
                        email:email
                    }
                })
                if(!user){// eso o user==null 
                    /* res.json({"message":"Credenciales invalidas"}) */
                    res.render('login',{
                        title:"Pagina de inicio",
                        error:true,
                        message: "Credenciales invalidas"
                    })
                }else{
                    if(bcrypt.compareSync(pass,user.pass)){
                        /* res.json({"message":"inicio de sesion exitosa"}); */
                        res.redirect('/');
                    }else{
                        res.render('login',{
                            title:"Pagina de inicio",
                            error:true,
                            message: "Credenciales invalidas"
                        })
                        /* res.json({"message":"Credenciales invalidas"}) */
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
            /* res.json({"message":`pagina de edicion de usuario N° ${req.params.id}`,user})     */
            res.render('editUser',{
                title:"Pagina de edicion de usuario",
                user
            })
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
             await UserModel.update({
                userName:userName,
                names:names,
                surnames:surnames,
                email:email
            },{
                where:{
                    id:id
                }
            })  
        /* res.json("Usuario editado") */
        res.redirect('/user/allUsers');
        } catch (error) {
            res.json({
                "message": error.message
            })
        }
    },
    /* mostrar todos los usuarios */
    allUsers: async(req,res)=>{
      try {
        const users = await UserModel.findAll();
        res.render('listaUsuarios',{
            title:"Todos los usuarios",
            users
        })
      } catch (error) {
        
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
            /* res.json({"message": "usuario eliminado"}) */
            res.redirect('/');
        } catch (error) {
            res.json({message:error.message})            
        }
        
    }
}
