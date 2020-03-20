const Question = require('../models/question');

const questionController = {
    getQuestions: async (request,response) => {
        try {
            const questions = await Question.findAll({
                include: ['author','answers','tag',],
                order:[['created_at', 'DESC']]

            });
            response.json({questions});
        } catch (error) {
            response.status(500).send(error);
        }
    },

    getQuestionById: async (request, response) => {
        const questionId = parseInt(request.params.id);
        try {
            const question = await Question.findByPk(questionId, {
                include:['tag','author','answers'],
                order:[['answers','score', 'DESC']]
            })
            response.json({question});
        } catch (error) {
            response.status(500).send(error);
        } 
    },

    getQuestionByTag: async (request, response) => {
        const tagId = parseInt(request.params.id);
        try {
            const questions = await Question.findAll({
                where: {tagId: `${tagId}`},
                include:['author','answers']
            });
            response.json({questions});
        } catch (error) {
            response.status(500).send(error);
        } 
    },

    createQuestion: async (request,response) => {
        try {
            const content = request.body.content;
            const tagId = request.body.tagId;
            if(!content){
                response.json({error: 'il manque la question!'});
            } else {
                const newQuestion = new Question();
                newQuestion.content = content;
                newQuestion.userId = request.session.user.id;
                newQuestion.tagId = tagId;
                await newQuestion.save();
                response.json(newQuestion);
            }
        } catch(error) {
            response.status(500).json(error);
        }
    }

    /*
    getBestQuestions: async (request, response) => {
        try {
            const questions = await Question.findAll({
                order:[['score', 'DESC']],
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
    },

    getNewQuestions: async (request, response) => {
        try {
            const questions = await Question.findAll({
                order:[['created_at', 'DESC']],
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
    },
*/
};


module.exports = questionController;