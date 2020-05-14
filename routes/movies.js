var express = require('express');
var router = express.Router();

//Controlador
const controller = require('../controllers/movieController');

//Ruta de prueba
router.get('/', controller.home); 
router.get('/Home', controller.home); 
router.get('/ListadoDeGeneros', controller.listadoDeGeneros); 


module.exports = router;