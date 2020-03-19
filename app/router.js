//Router
const express = require('express');

// importer les controllers
const questionController = require('./controllers/questionController');
const tagController = require('./controllers/tagController');
const userController = require('./controllers/userController');
// importer les middlewares

const router = express.Router();
// rends disponible les données envoyées par l'utilisateur, via req.body
router.use(express.urlencoded({
    extended: true
  }));

//questions route
router.get('/', questionController.getQuestions);

//question route
router.get('/question/:id', questionController.getQuestionById);
router.get('/question/tag/:id', questionController.getQuestionByTag);


// Trier questions frontpage
//router.get('/questions/best', questionController.getBestQuestions);
//router.get('/questions/new', questionController.getNewQuestions);

//Tags route
router.get('/tags', tagController.getAllTags);
 
// User route
router.get('/user/:id', userController.getUserById);
// route login pour les test du formulaire de connection
router.get('/login', userController.loginPage);
router.post('/login', userController.loginAction);



module.exports = router;