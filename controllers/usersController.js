const db = require('../database/models');

module.exports = {
    register: function(req,res){
        res.render("register");
   
},
//Funcion de guardado, el req.body es para capturar lo que nos pase el user como informacion
    save: function(req, res) {
        let user = {
            name: req.body.name,
            email: req.body.email,
            pass: bcrypt.hashSync(req.body.pass, 10),
            birthdate: req.body.bdate,
        }

        db.users
        .create(user)
        .then(() => {
            res.redirect("/movies")
        })
},
}