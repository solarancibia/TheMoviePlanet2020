var express = require('express');
var router = express.Router();

//Controlador
const controller = require('../controllers/searchUserController');

//Toma el metodo search de searchUserController. Al capturar la consulta del user con .query esto hace que a 
//la ruta se le agregue la consulta luego del ? para poder buscarla. Como es por get sirve para solicitarle los 
//datos y vista al servidor y el controller renderiza la vista y pasa el parametro a la misma para que esta pueda 
//utilizar sus datos.
router.get("/userResults", controller.search);


//Toma el metodo userDetails de searchUserController. Al capturar el id de la base de datos por params, esto hace que 
//el id se le pase a la ruta en :id. Como es por get solicita datos y vista al servidor y el controller renderiza la vista
// del usuario cuyo id corresponde al capturado por params y le pasa el parametro a la misma para que esta pueda utilizar sus datos.
router.get('/userResults/:id', controller.userDetails); 


module.exports = router;