/* crear un usuario */
export const userRegister = (req,res)=>{
    res.send('Pagina de registro');
}

/* iniciar usuario */
export const userLogin = (req,res)=>{
    res.send("Pagina de login del usuario")
}


/* Editar un usuario */
export const userEdit = (req,res)=>{
    res.send("edit User")
}
/* eliminar usuaio */
export const userDelete = (req,re)=>{
    res.send("delete user")
}