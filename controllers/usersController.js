const db = require('../database/models');
const bcrypt = require('bcryptjs');
const moduloLogin = require ('../modulo-login');

module.exports = {
    register: function(req,res){
        res.render("register");
    },
    //Funcion de guardado, el req.body es para capturar lo que nos pase el user como informacion
    save: function(req, res) { 
        // return res.send(req.body)
        req.body.pass = bcrypt.hashSync(req.body.password, 10);
        db.users
        .create(req.body)
        .then(() => {
            res.redirect("/movies")
        })
    },
    
//lo que nos hizo Gonza
   /* processLogin: function(req, res){
        moduloLogin.validar(req.body.email, req.body.password)
            .then(data => {
                if(data){
                    res.redirect('/profile/' + data.id)
                }else{
                    res.send('contrasenia incorrecta')
                }
            })
    },
    profile: function(req, res){
        db.users.findByPk(req.params.id)
        .then(user => {
            if(user){
                res.render('profile', { user })
            }
        })
    }*/
}