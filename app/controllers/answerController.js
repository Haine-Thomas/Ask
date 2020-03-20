const Answer = require('../models/answer');

const  answerController = {
    getAnswersByQuestionId: async (request, response) => {
        const questionId = request.params.id;
       try {
        let answers = await Answer.findAll({
            where: {questionId: `${questionId}`},
            include: ["author"],
        });
        response.json(answers);
       } catch(error) {
            response.status(500).json(error);
       }
    }
}

module.exports = answerController;