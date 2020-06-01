const db = require('../database/models');
const moduloLogin = require('../modulo-login');
const bcrypt = require('bcryptjs');

module.exports = {
    // login: function(req, res){

    // },
    // entrar: function(req,res) {
    //     moduloLogin.chequearUsuario(req.body.email).then(chequeo => {
    //         if (chequeo == false){
    //             console.log("no existe el usuario");
                
    //         }
    //         else {
    //             moduloLogin.buscarPorEmail(req.body.email).then(user => {
    //                 console.log("datos");
    //                 if (bcrypt.compareSync(req.body.pass, log.pass)){
    //                     res.send('ha sido logueado');
    //                 }
    //                 else {
    //                     res.send("los datos son invalidos");
    //                 }
    //             })
    //         }
    //     })
    // },

    logUser: function (req, res) {
        res.render ('login', {type: 'log'});
    },

    //confirmamos el login
    confirmUser: function (req, res){
        moduloLogin.validar(req.body.email, req.body.pass)
        .then(result=> {
            if(result == undefined){
                res.redirect('/movies')
            }else{
                console.log(result.id);
                res.redirect('/movies' + result.id)
            }
        })
    },

    getReviews: function (req, res) {
        db.Reviews.findAll({
            where: [
                {user_id: req.body.id}
            ],
            include: [ "usuario" ]
        })
        .then(result=>{
            console.log(result);
            res.render('reviews', {result:result})
        })
    },

    showEdit: function (req, res){
        db.Reviews.findOne({
            where: [
                {id: req.params.id}
            ]
        })
        .then(result=>{
            res.render('editReview', {result: result})
        })
    },

    confirmEdit: function (req,res) {
        console.log(req.params.id);
        let updateReview = {
            review_text: req.body.review_text,
            rating: req.body.rating,
            id: req.params.id
        }

        db.Review.update({
            review_text: updateReview.review_text,
            rating: updateReview.rating
        },{
            where: {
                id: updateReview.id,
            }
        }) .then(()=>{
            db.Reviews.findByPk(req.params.id)
            .then(result=>{
                res.redirect("/users/reviews/" + resultado.user_id)
            })
        })
    },

    deleteReview: function (req, res){
        res.render('login', {type: "delete", deleteId: req.params.id})
    },

    confirmDelete: function (req, res){
        moduloLogin.validar(req.body.email, req.body.pass)
        .then(result=>{
            if (result != null){
                db.Reviews.destroy({
                    where: {
                        id: req.params.id,
                    }
                })
                res.redirect('/users/reviews/')
            }else{
                res.redirect('/users/reviews/delete/' + req.params.id)
            }
        })
    },
};



