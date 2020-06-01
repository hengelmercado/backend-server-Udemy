var jwt = require('jsonwebtoken');
var SEED = require('../config/config').SEED;
//===================================================
// Verificar tiken
//===================================================

exports.verificaToken = function(req, res, next) {
    var token = req.query.token;

    jwt.verify(token, SEED, (err, decoder) => {
        if (err) {
            return res.status(401).json({
                ok: false,
                mensaje: 'Token incorrecto',
                errors: err
            });
        }

        req.usuario = decoder.usuario;
        next();
    });
};