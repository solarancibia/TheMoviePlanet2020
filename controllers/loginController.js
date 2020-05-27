const db = require('../database/models');
const moduloLogin = require('../modulo-login');
const bcrypt = require('bcryptjs');

module.exports = {
    login: function(req, res){

    },
    entrar: function(req,res) {
        moduloLogin.chequearUsuario(req.body.email).then(chequeo => {
            if (chequeo == false){
                console.log("no existe el usuario");
                
            }
            else {
                moduloLogin.buscarPorEmail(req.body.email).then(user => {
                    console.log("datos");
                    if (bcrypt.compareSync(req.body.pass, log.pass)){
                        res.send('ha sido logueado');
                    }
                    else {
                        res.send("los datos son invalidos");
                    }
                })
            }
        })
    }
};



