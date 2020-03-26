const Answer = require('../models/answer');

const answerController = {
  getAnswersByQuestionId: async (request, response) => {
    const questionId = request.params.id;
    try {
      let answers = await Answer.findAll({
        where: { questionId: `${questionId}` },
        include: ['author'],
      });
      response.json(answers);
    } catch (error) {
      response.status(500).json(error);
    }
  }, 

  createAnswer: async (request,response) => {
    try {
      const content = request.body.content;
      const questionId = request.params.id;
      if (!content) {
        response.json({error: 'il manque la réponse!'});
      } else {
        const newAnswer = new Answer();
        newAnswer.content = content;
        newAnswer.userId = request.session.user.id;
        newAnswer.questionId = questionId;
        await newAnswer.save();
        response.json(newAnswer);
      }
    } catch (error) {
      response.status(500).json(error);
    }
  },

  editAnswer: async (request, response) => {
    try {
      const answerId = request.params.id;
      let answer = await Answer.findByPk(answerId);
      if (!answer) {
        // pas de lréponse pour cet id
        response.status(404).json(`Cant find a question with this id : ${answer}`);
      } else {
        const { content } = request.body;
        if (content) {
          answer.content = content;
        }
        await answer.save();
        response.json(answer);
      }
    } catch (error) {
      response.status(500).json(error);
    }
  },

  editAnswerScore: async (request, response) => {
    try {
      const answerId = request.params.id;
      const answerScore = request.params.score;
      let answer = await Answer.findByPk(answerId);
      if (!answer) {
        // pas de lréponse pour cet id
        response.status(404).json(`Cant find a question with this id : ${answer}`);
      } else {
        if (answerScore === 'upVote') {
          answer.score = answer.score + 1;
        }
        if (answerScore === 'downVote') {
          answer.score = answer.score - 1;
        }
        await answer.save();
        response.json(answer);
      }
    } catch (error) {
      response.status(500).json(error);
    }
  },

  deleteAnswer: async (request, response)=>{
    try {
      const answerId = request.params.id;
      let answer = await Answer.findByPk(answerId);
      await answer.destroy();
      response.json({ message: "La réponse a bien été supprimée"});
    } catch (error) {
      response.status(500).send(error);
    }
  },

};

module.exports = answerController;
