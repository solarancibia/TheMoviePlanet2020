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
}
module.exports = controlador;