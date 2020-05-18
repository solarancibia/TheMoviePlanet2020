// const DB = require('../database/models')

// module.exports ={
//     index: (req, res) => {
//         DB.Movies
//         .findAll()
//         .then(movies => {
//             return res.render('moviesIndex', {
//                 listaPeliculas: movies
//             });
//         })
//         .catch(error => {
//             res.send(error);
//         })
//     }
// }

let controlador = {
    home: function (req, res){
        res.render('Home');
    },
    detallePeli: function(req, res){
        res.render('detallePeli');
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