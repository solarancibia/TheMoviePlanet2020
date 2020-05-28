var express = require('express');
var router = express.Router();

//Controlador
const controller = require('../controllers/searchUserController');


router.get("/userResults", controller.search);

router.get('/userResults/:id', controller.userDetails);


module.exports = router;