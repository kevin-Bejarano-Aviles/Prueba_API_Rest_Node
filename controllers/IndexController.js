

module.exports = {
    index : (req,res)=>{/* se exporta el metodo */
    /* res.json("Pagina index"); *//* mensaje sin html */
    res.render('index',{
        title: "Pagina de inicio"
    })
},

}

 