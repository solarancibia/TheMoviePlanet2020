var express = require('express');
var router = express.Router();

//Controller
const controller = require('../controllers/usersController');

router.get("/", controller.register);
router.post("/", controller.save );


module.exports = router;