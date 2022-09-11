

module.exports = {
    //Pagina de inicio
    index : (req,res)=>{
     //res.json("Pagina index");  mensaje sin html 
   /*  res.render('index',{
        title: "Pagina de inicio"
    }) */
    res.json({message:"Pagina de inicio"})
},
/* base de datos con relaciones : dentro de una consulta hay que poner el include */
}

 