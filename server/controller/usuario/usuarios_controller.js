const usuarioModel = require('../../models/usuario/usuarios_model')
const UsuarioCtrl = {}

UsuarioCtrl.getUsuarios = async(req, res)=>{
    const usuario = await usuarioModel.find()
    res.json(usuario)
}
UsuarioCtrl.deleteProductos = async(req, res) => {
    await usuarioModel.findByIdAndDelete(req.params.id)
    res.json({status: 'Usuario Eliminado'})
}

module.exports = UsuarioCtrl;