const Usuarios = require('../../dao/usuario/usuario_dao')
const bcrypt = require('bcryptjs');

exports.createusuario = (req, res) =>{
    const nuevoUsuario ={
        strNombreUsuario: req.body.strNombreUsuario,
        strPassword: bcrypt.hashSync(req.body.strPassword),
        strTipoUsuario: req.body.strTipoUsuario
    }

    Usuarios.create(nuevoUsuario, (err, user)=>{
        if (err && err.code === 11000) return res.status(409).send('Nombre ya utilizado');
        if (err) return res.status(500).send('Error a crear el usuario');

        const datosUsuario ={
            strNombreUsuario: user.strNombreUsuario,
            strTipoUsuario: user.strTipoUsuario
        }
        res.send({datosUsuario})
    })
}

exports.loginUsuario= (req, res, next) => {
    const usuarioDatos = {
        strNombreUsuario: req.body.strNombreUsuario,
        strPassword: req.body.strPassword
    }
    Usuarios.findOne({ strNombreUsuario: usuarioDatos.strNombreUsuario }, (err, user) => {
        if (err) return res.status(500).send('Error al logearte', err);
        if (!user) {
        res.status(409).send({ message: 'Algo estubo mal' });
        } else {
        const resultPassword = bcrypt.compareSync(usuarioDatos.strPassword, user.strPassword);
        if (resultPassword) {
            const datosUsuario= {
                strNombreUsuario: user.strNombreUsuario,
                strTipoUsuario: user.strTipoUsuario,
            }
            res.send({ datosUsuario });
        } else {

            res.status(404).send({ message: 'No se encontro al usuario' });
        }
    }
    });
}