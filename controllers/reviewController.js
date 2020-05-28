const db = require('../database/models');
const op = db.Sequelize.Op;
const moduloLogin = require ('../modulo-login');

module.exports = {
    index: function (req, res){
        db.Reviews.findAll({
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
        moduloLogin.validar(req.body.email, req.body.password)
    .then (result => {
        //aca va un if (si esta bien el usuario)
        db.Reviews.create({
            review_text: req.body.text,
            rating: req.body.score,
            user_id: result.id,
            movie_id: req.body.idDePeli,
            created_at: db.sequelize.literal("CURRENT_DATE")
        })
        .then(function(index){
            return res.redirect('/movies/detallePeli?idDePeli=' + req.body.idDePeli)
        })
        //aca va un else (si esta mal los datos del usuario)
    })
    }
 };