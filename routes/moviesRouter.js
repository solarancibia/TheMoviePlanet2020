var express = require('express');
var router = express.Router();

//Controlador
const controller = require('../controllers/movieController');

//Ruta de prueba
router.get('/', controller.home); 
router.get('/Home', controller.home); 
router.get('/ListadoDeGeneros', controller.listadoDeGeneros); 
router.get('/PeliculasPorGenero', controller.peliculasPorGenero); 
router.get('/DetallePeli', controller.detallePeli); 
router.get('/PelisPreferidas', controller.pelisPreferidas); 
router.get('/ResultadoDelBuscador', controller.resultadoDelBuscador); 
router.get('/topRated', controller.topRated); 
router.get('/bottomRated', controller.bottomRated); 
router.get('/recentReviews', controller.recentReviews); 

module.exports = router;