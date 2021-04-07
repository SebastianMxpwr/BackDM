const mongoose = require('mongoose')
const usuarioSchema = require('../../models/usuario/usuarios_model')

usuarioSchema.statics ={
    create: function (data, cb){
        const usuario = new this(data)
        usuario.save(cb)
    },
    login: function(query, cb){
        this.find(query, cb)
    }
}

module.exports = usuarioSchema