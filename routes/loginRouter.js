var express = require('express');
var router = express.Router();

//Controller
const controller = require('../controllers/loginController');

// router.get("/", controller.login);
// router.get("/", controller.entrar);

router.get ('/reviews', controller.logUser);

router.post ('/reviews', controller.confirmUser);

router.get ('/reviews/:id', controller.getReviews);

router.get ('/reviews/edit/:id', controller.showEdit);

router.post ('/reviews/edit/:id', controller.confirmEdit);

router.get ('/reviews/delete/:id', controller.deleteReview);

router.post ('/reviews/delete/:id', controller.confirmDelete);

module.exports = router;