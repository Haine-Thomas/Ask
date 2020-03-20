//Router
const express = require('express');

// importer les controllers
const questionController = require('./controllers/questionController');
const tagController = require('./controllers/tagController');
const userController = require('./controllers/userController');
const answerController = require('./controllers/answerController');
// importer les middlewares

const router = express.Router();
// rends disponible les données envoyées par l'utilisateur, via req.body
router.use(express.urlencoded({
    extended: true
  }));

//Front page route
router.get('/', questionController.getQuestions);

//question route
  //création question
router.post('/question', questionController.createQuestion);

router.get('/question/:id', questionController.getQuestionById);
router.patch('/question/:id', questionController.editQuestion);
// ATTENTION de bien spécifier "upVote" ou "downVote" en front dans le params "score"
router.patch('/question/:id/:score', questionController.editQuestionScore);
router.delete('/question/:id', questionController.deleteQuestion);
router.get('/question/tag/:id', questionController.getQuestionByTag);

// Answer route
router.get('/question/:id/answers', answerController.getAnswersByQuestionId);
router.post('/question/:id/answer', answerController.createAnswer);
router.patch('/answer/:id', answerController.editAnswer);

// ATTENTION de bien spécifier "upVote" ou "downVote" en front dans le params "score"
router.patch('/answer/:id/:score', answerController.editAnswerScore);
router.delete('/answer/:id', answerController.deleteAnswer);

// Trier questions frontpage
//router.get('/questions/best', questionController.getBestQuestions);
//router.get('/questions/new', questionController.getNewQuestions);

//Tags route
router.get('/tags', tagController.getAllTags);
 
// User route
router.get('/user/:id', userController.getUserById);
// route login pour les test du formulaire de connection
router.get('/login', userController.loginPage);
router.get('/disconnect', userController.disconnect);
router.post('/login', userController.loginAction);


//page Inscription
router.post('/inscription', userController.signUpAction);

//Ma page Profil
router.get('/monprofil', userController.myProfilPage);
//Supprimer un compte
router.delete('/user/:id', userController.deleteUser);
// Editer son profil
router.patch('/user/:id', userController.editUser);

module.exports = router;