const db = require('../database/models');
const bcrypt = require('bcryptjs');

module.exports = {
    register: function(req,res){
        res.render("register");
    },
    //Funcion de guardado, el req.body es para capturar lo que nos pase el user como informacion
    save: function(req, res) {
        // return res.send(req.body)

        req.body.pass = bcrypt.hashSync(req.body.password, 10);
        /*let user = {
            name: req.body.name,
            email: req.body.email,
            pass: bcrypt.hashSync(req.body.password, 10),
            bdate: req.body.bdate,
        }*/

        db.users
        .create(req.body)
        .then(() => {
            res.redirect("/movies")
        })
    },
    //las resenias de los usuarios  
    miReview: function(){
       db.users.findOne({
           where: {
               email: req.body.email
           }
       }).then((user)=> {
           let id_user = usuario.id_user
       }) 
    }

}