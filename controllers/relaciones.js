/* const aso= require('../models/asociaciones');

module.exports={
    crearProducto: async(req,res)=>{
        let num = 0
        aso.ProductModel.create({
            productName:"hols"+(++num),
            
        })
        .then(()=>{
            res.send('Producto creado')
        })
    },
    asociarProducto: async(req,res)=>{
        const user = await aso.UserModel.findByPk(req.params.id)
        const usuarioEdit =  await aso.ProductModel.update({
            userId: user.id
            },{
                where:{id:3}
            })
        res.send("si")
    },
    mostrarAsociacion: async(req,res)=>{
        const product = await aso.ProductModel.findByPk(req.params.id,{
            include:{model:aso.UserModel}
        })
        res.send(product)
    }
    
} */