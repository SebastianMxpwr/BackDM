const productoModel = require('../../models/producto/producto_model')
const productoCtrl = {}

productoCtrl.getProductos = async(req, res) =>{
    const producto = await productoModel.find()
    res.json(producto)
}
productoCtrl.crearProductos = async(req,res) => {
    const newProducto = new productoModel({
        strNombre: req.body.strNombre,
        nmbPrecio: req.body.nmbPrecio,
        strDescripcion: req.body.strDescripcion,
        nmbExistencia: req.body.nmbExistencia
    })
    await newProducto.save()
    res.json({
        "estatus": "producto registrado", newProducto
    })
    console.log(req.body)
}

productoCtrl.deleteProductos = async(req, res) => {
    await productoModel.findByIdAndDelete(req.params.id)
    res.json({status: 'Producto Eliminado'})
}



module.exports = productoCtrl;