const mongoose = require('mongoose')
const { Schema } = mongoose

const usuariosSchema = new Schema({
    strNombreUsuario: {
        type: String,
        required: [true, 'Es necesario escribir el nombre'],
        unique: true
    },
    strTipoUsuario:{
        type: String,
        required: [true, 'Es necesario poner el tipo de usuario']
    },
    strPassword:{
        type: String,
        required: [ true, 'Es super necesario  colocar una contrasenia']
    },
    blnActivo:{
        type: Boolean,
        default: true
    }
}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    },
    collection: "usuarios"
})

module.exports = mongoose.model('Usuarios', usuariosSchema)