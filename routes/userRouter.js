var express = require('express');
var router = express.Router();

//Controller
const controller = require('../controllers/usersController');

router.get("/", controller.register);
router.post("/", controller.save );

//ruta del login
router.get ('/login', controller.logUser);
router.post ('/login', controller.confirmUser);

//ruta de mis reviews
router.get ('/reviews/:id', controller.getReviews);

//ruta donde edito mi resena 
router.get ('/reviews/edit/:id', controller.showEdit);
router.post ('/reviews/edit/:id', controller.confirmEdit);

//ruta done elimino mi resena
router.get ('/reviews/delete/:id', controller.deleteReview);
router.post ('/reviews/delete/:id', controller.confirmDelete);


module.exports = router;