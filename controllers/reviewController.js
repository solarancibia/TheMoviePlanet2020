const db = require('../database/models');
const op = db.Sequelize.Op;
const moduloLogin = require ('../login.js')

module.exports = {
    index: function (req, res){
        db.Reviews.findAll(
            {
                where: {
                    movie_ID: req.query.id
                }
            }
        )
        .then (data =>{
            res.render('movies',{
                movieID: req.query.id,
                reviews: data
            })
        })

    },

    //Crear review
    review: (req, res) =>{
        moduloLogin.validate(req.body.email, req.body.password)
    .then (result => {
        db.Reviews.create({
            text: req.body.text,
            score: req.body.score,
            user_id: result.id,
            movie_id: req.params.movieID
        })
        .then(function(index){
            return res.redirect('/movies?id=' + req.params.movieID)
        })
    })
    }
 };