var express = require('express');
var router = express.Router();

//Controller
const controller = require('../controllers/reviewController');

router.get("/", controller.index);
router.post("/", controller.review);

module.exports = router;