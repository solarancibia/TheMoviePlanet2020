var express = require('express');
var router = express.Router();

//Controller
const controller = require('../controllers/loginController');

router.get("/", controller.login);
router.get("/", controller.entrar);


module.exports = router;