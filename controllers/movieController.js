const db = require('../database/models');
const op = db.Sequelize.Op;
const moduloLogin = require ('../modulo-login');

let controlador = {
    home: function (req, res){
        res.render('Home');
    },
    
    // metodo que captura las resenias que subimos arriba con el form (su metodo esta en reviewController) y las mostramos en el ejs con un for
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
    
    topRated : function(req,res){

 
        db.Reviews.findAll(
            {
                where: [
                    { rating: { [op.gte]: 8} }
                ], 
                order : [ 
                    [ "rating", "DESC"]  
            ],
            
            include: [
                {association: "user"},
            ]  
            }
        )
    
        .then(function(review) {
            
            res.render("topRated", {
                review: review
            })
        })
        
     },
     bottomRated : function(req,res){
    
     
        db.Reviews.findAll(
            {
                where: [
                    { rating: { [op.lt]: 5} }
                ], 
                order : [ 
                    [ "rating", "ASC"]  
            ],
            
            include: [
                {association: "user"},
            ]  
            }
        )
    
        .then(function(review) {
            
            res.render("bottomRated", {
                review: review
            })
        })
        
     },
    
     recentReviews : function(req,res){
    
     
        db.Reviews.findAll(
            {
                
                order : [ 
                    [ "updated_at", "DESC"]  
            ],
            
            include: [
                {association: "user"},
            ]  
            }
        )
    
        .then(function(review) {
            
            res.render("recentReviews", {
                review: review
            })
        })
        
     }
};
module.exports = controlador;