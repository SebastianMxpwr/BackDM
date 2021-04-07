const usuariosV = require('../controller/usuario/usuarios_controllerV')
const usuarios = require('../controller/usuario/usuarios_controller')
const productos = require('../controller/producto/producto_controller')
module.exports = (router) =>{
    router.post('/register/usuario', usuariosV.createusuario)
    router.post('/login/usuario', usuariosV.loginUsuario)
    router.get('/usuario', usuarios.getUsuarios)
    router.get('/producto', productos.getProductos)
    router.post('/register/productos', productos.crearProductos)
    router.delete('/del/productos/:id', productos.deleteProductos)
    router.delete('/del/usuarios/:id', usuarios.deleteProductos)
}