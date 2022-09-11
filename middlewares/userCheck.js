/* 
module.exports =(req,res,next)=>{
    if(req.session.newUser){
        next()
    }else{
      
        res.json({message:"NO PUEDE INGRESAR, NO ESTA LOGEADO"})
    }    
} */
//verificar si tiene el jwt;