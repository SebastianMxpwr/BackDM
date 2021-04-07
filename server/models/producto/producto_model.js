const mongoose = require('mongoose')
const { Schema } = mongoose

const productoSchema = new Schema({
    strNombre:{
        type: String,
        required:[true, 'Es necesario poner el nombre']
    },
    nmbPrecio:{
        type: Number,
        required:[true, 'Es necesario poner el precio']
    },
    strDescripcion:{
        type: String
    },
    nmbExistencia:{
        type:Number,
        required:[true, 'Es necesario las existencias']
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
    collection: "productos"
})
module.exports = mongoose.model('Productos', productoSchema)