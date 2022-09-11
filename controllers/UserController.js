const {request,response} = require('express');
/* const UserModel = require('../models/User'); */
const bcrypt = require('bcrypt');
//method register
const userRegister = async(req=request,res=response)=>{
    const {userName,fullName,email,pass} = req.body;
    const avatar = req.files[0] ? req.files[0].filename:'defoult.png';
    const passHash = bcrypt.hashSync(pass,10);
    try {
        await UserModel.create({
            userName:userName,
            fullName:fullName,
            email:email,
            pass:passHash,
            avatar:avatar,
            status:true,
            rol:'USER'
        });
        res.status(200).json({menssage:'User create'});
    } catch (error) {
        res.status(500).json(error);
    }
};
//method login
const userLogin = async(req=request,res=response)=>{
    const {email,pass} = req.body;
    try {
        const user = await UserModel.findOne({
            where:{
                email:email
            }
        });
        if(!user){
            return res.status(401).json({menssage:'Credenciales Invalidas'});
        }
        if(!bcrypt.compareSync(user.pass,pass)){
            return res.status(401).json({menssage:'Credenciales Invalidas'});
        }
        res.status(200).json(user);
        //se usara el jwt
    } catch (error) {
        res.status(500).json(error);
    }
}
//method viewProfile
const userProfile = async(req=request,res=response)=>{
    const {id} = req.params;
    try {
        const user = await UserModel.findOne({
            where:{
                id:id
            }
        });
        if(!user && user.status == 1){
            return res.status(404).json({menssage:'Usuarion no esta el la db'});
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json(error);
    }
};
//method editProfile siempre y cuando solo seas vos
const editUser = async(req=request,res=response)=>{
    const {userName,fullName,email} = req.body;
    const {id} = req.params;
    try {
        const user = await UserModel.findOne({where:{id:id}});
        const avatar = req.files[0] ? req.files[0].filename : user.avatar
        const userUpdate = await UserModel.update({
            userName:userName,
            fullName:fullName,
            email:email,
            avatar:avatar
        },{
            where:{
                id: id
            }
        });
        res.status(200).json(userUpdate);
    } catch (error) {
        res.status(500).json(error);
    }
};
//method editPass siempre y cuando solo seas vos
const editPassUser = async(req=request,res=response)=>{
    const pass = req.body;
    const passHash = bcrypt.hashSync(pass,12);
    const {id} = req.params;
    try {
        const userEdit = await UserModel.update({
            pass:passHash
        },{
            where:{
                id:id
            }
        });
        res.status(200).json({userEdit});
    } catch (error) {
        res.status(500).json(error);
    }
}

//method logOut siempre y cuando solo seas vos
const userLogOut = async(req,res)=>{
    //terminar con la jwt

};
//method DeleteMe siempre y cuando solo seas vos
const deleteUser = async(req=request,res=response)=>{
    const {id} = req.params;
    try {
        const user = await UserModel.findOne({where:{id:id}});
        //eliminarSuSession;
        await UserModel.update({
            status:0
        },{
            where:{
                id:id
            }
        });  
    } catch (error) {
        res.status(500).json(error);
    }
}
//exports Methods
module.exports = {
    userRegister,
    userLogin,
    userProfile,
    editUser,
    editPassUser,
    userLogOut,
    deleteUser
}