//Router
const express = require('express');

// importer les controllers
const questionController = require('./controllers/questionController');
const tagController = require('./controllers/tagController');
const userController = require('./controllers/userController');
// importer les middlewares

const router = express.Router();

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



module.exports = router;