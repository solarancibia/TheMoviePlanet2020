var express = require('express');
var router = express.Router();

//Controlador
const controller = require('../controllers/searchUserController');

router.get("/userResults", controller.search);


module.exports = router;