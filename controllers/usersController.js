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
    logUser: function (req, res) {
        res.render ('login', {type: 'log'});
    },

    //confirmamos el login
    confirmUser: function (req, res){
        moduloLogin.validar(req.body.email, req.body.password)
        .then(result=> {
            if(result == undefined){
                res.redirect('/movies')
            }else{
                console.log(result.id);
                res.redirect('/user/reviews/' + result.id)

            }
        })
    },

    getReviews: function (req, res) {
        //return res.send('ok')
        db.Reviews.findAll({
            where: [
                {user_id: req.params.id}
            ],
            include: [ "user" ]
        })
        .then(result=>{
          //  res.send(result)
            // console.log(result);
            res.render('reviews', {result: result})
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
                res.redirect("/user/reviews/" + result.id)
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
                res.redirect('/user/reviews/')
            }else{
                res.redirect('/user/reviews/delete/' + req.params.id)
            }
        })
    }

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