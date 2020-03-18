//Router
const express = require('express');

// importer les controllers
const questionController = require('./controllers/questionController');
const tagController = require('./controllers/tagController');
// importer les middlewares

const router = express.Router();

//Questions
router.get('/', questionController.getQuestions);

//Question
router.get('/question/:id', questionController.getQuestionById);
router.get('/question/tag/:id', questionController.getQuestionByTag);


// Trier questions frontpage
//router.get('/questions/best', questionController.getBestQuestions);
//router.get('/questions/new', questionController.getNewQuestions);

//Tags
router.get('/tags', tagController.getAllTags);





module.exports = router;