const { response } = require('express');
const Usuario = require('../models/Usuario');
const bcrypt = require('bcryptjs');
const { generarJWT } = require('../helpers/jwt');

const crearUsuario = async(req, res = response) => {

    const { email, name, password } = req.body;

    try {
        // Verificar si el email existe
        let usuario = await Usuario.findOne({ email });

        if (usuario) {
            return res.status(400).json({
                ok: false,
                msg: 'Un usuario existe con ese email'
            });
        }
        // Crear un nuevo Usuario con el modelo
        const dbUser = new Usuario( req.body );

        // Hashear el password
        const salt = bcrypt.genSaltSync();
        dbUser.password = bcrypt.hashSync( password, salt );

        // Generar el JWT
        const token = await generarJWT( dbUser.id, name );

        // Crear el usuario de DB
        await dbUser.save();

        // Generar respuesta exitosa
        return res.status(201).json({
            ok: true,
            uid: dbUser.id,
            name,
            token,
            email
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        });
    }
}

const loginUsuario = async(req, res = response) => {
    
    const { email, password } = req.body;

    try {

        // Busco el usuario en la DB por el email
        const dbUser = await Usuario.findOne( { email });

        if ( !dbUser ) {
            return res.status(400).json({
                ok: false,
                msg: 'El usuario no existe con ese email'
            });
        }
        // Confirmar si el password hace match
        const validPassword = bcrypt.compareSync( password, dbUser.password );

        if ( !validPassword ) {
            return res.status(400).json({
                ok: false,
                msg: 'Password incorrecto'
            });
        }

        // Generar el JWT
        const token = await generarJWT( dbUser.id, dbUser.name );

        // Generar respuesta exitosa
        return res.json({
            ok: true,
            uid: dbUser.id,
            name: dbUser.name,
            token,
            email: dbUser.email
        });
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        });
    }
}

const revalidarToken = async(req, res = response) => {

    const { uid } = req;

    // Leer la base de datos
    const dbUser = await Usuario.findById( uid );

    const token = await generarJWT( uid, dbUser.name );

    return res.json({
       ok: true,
       uid,
       name: dbUser.name,
       email: dbUser.email,
       token
   });
}

module.exports = {
    crearUsuario,
    loginUsuario,
    revalidarToken
}