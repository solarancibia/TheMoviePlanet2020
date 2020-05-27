const db = require('../database/models');
const moduloLogin = require('../modulo-login');
const bcrypt = require('bcryptjs');

module.exports = {
    login: function(req, res){
        
    },
    entrar: function(req,res) {
        req.body.email;
        req.body.pass = bcrypt.hashSync(req.body.password, 10);

        moduloLogin.validar(email, pass).then(function(usuario){
            if (usuario == true) {
                
            }
        })
    }
};