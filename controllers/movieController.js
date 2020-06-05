const db = require('../database/models');
const op = db.Sequelize.Op;
const moduloLogin = require ('../modulo-login');

let controlador = {
    home: function (req, res){
        res.render('Home');
    },
    
    detallePeli: function(req, res){
        db.Reviews.findAll({
            // where: {
            //     movie_id: req.query.idDePeli
            // }
            where: [
                {movie_id: req.query.idDePeli}
            ],
            include: [ {association:"user"}, ]
        })
            .then(results => {
                let idDePeli = req.query.idDePeli
                res.render('detallePeli', { 
                    idDePeli: idDePeli,
                    reviews: results
                });
            })
    },

    listadoDeGeneros: function(req, res){
        res.render('ListadoDeGeneros');
    },
    peliculasPorGenero: function(req, res){
        res.render('peliculasPorGenero');
    },
    pelisPreferidas: function(req, res){
        res.render('PelisPreferidas');
    },
    resultadoDelBuscador: function(req, res){
        res.render('ResultadoDelBuscador');
    },
};
module.exports = controlador;