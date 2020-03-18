const Question = require('../models/question');

const questionController = {
    getQuestion: async (request,response) => {
        try {
            const questions = await Question.findAll({
                include: [
                    'author',
                    'answers',
                    'tag',
                ]
            });
            response.json({questions});
        } catch (error) {
            response.status(500).send(error);
        }
    }
};

module.exports = questionController;