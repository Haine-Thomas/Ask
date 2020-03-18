//Router
const express = require('express');

// importer les controllers
const questionController = require('./controllers/questionController');
// importer les middlewares

const router = express.Router();

//Question
router.get('/', questionController.getQuestion);





module.exports = router;