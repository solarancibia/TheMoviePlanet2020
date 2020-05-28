var express = require('express');
var router = express.Router();

//Controller
const controller = require('../controllers/reviewController');

router.get("/", controller.review);
router.post("/", controller.get);

module.exports = router;