var express = require('express');
var router = express.Router();

//Controller
const controller = require('../controllers/reviewController');

//las resenas en el detalle de las peliculas 
router.get("/", controller.index);
router.post("/", controller.review);

module.exports = router;