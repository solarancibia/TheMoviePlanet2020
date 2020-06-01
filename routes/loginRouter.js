var express = require('express');
var router = express.Router();

//Controller
const controller = require('../controllers/loginController');

router.get("/", controller.login);
router.get("/", controller.entrar);

router.get ('/reviews', loginController.logUser);

router.post ('/reviews', loginController.confirmUser);

router.get ('/reviews/:id', loginController.getReviews);

router.get ('/reviews/edit/:id', loginController.showEdit);

router.post ('/reviews/edit/:id', loginController.confirmEdit);

router.get ('/reviews/delete/:id', loginController.deleteReview);

router.post ('/reviews/delete/:id', loginController.confirmDelete);

module.exports = router;