const Answer = require('../models/answer');

const answerController = {
  getAnswersByQuestionId: async (request, response) => {
    const questionId = request.params.id;
    try {
      let answers = await Answer.findAll({
        where: { questionId: `${questionId}` },
        include: ['author', 'question'],
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
      const user = request.session.user.id;
      if (!content) {
        response.json({error: 'il manque la réponse!'});
      } if (user) {
        const newAnswer = new Answer();
        newAnswer.content = content;
        newAnswer.userId = request.session.user.id;
        newAnswer.questionId = questionId;
        await newAnswer.save();
        response.json(newAnswer);
      } else {
        response.status(500);
      }
    } catch (error) {
      response.status(500).json(error);
    }
  },

  editAnswer: async (request, response) => {
    try {
      const answerId = request.params.id;
      const answer = await Answer.findByPk(answerId);
      const user = request.session.user.id;
      if (!answer) {
        // pas de lréponse pour cet id
        response.status(404).json(`Cant find a question with this id : ${answer}`);
      } if (user === answer.userId) {
        const { content } = request.body;
        if (content) {
          answer.content = content;
        }
        await answer.save();
        response.json(answer);
      } else {
        response.status(500);
      }
    } catch (error) {
      response.status(500).json(error);
    }
  },

  editAnswerScore: async (request, response) => {
    try {
      const answerId = request.params.id;
      const answerScore = request.params.score;
      const userId = request.session.user.id;
      let answer = await Answer.findByPk(answerId);
      if (!answer) {
        // pas de lréponse pour cet id
        response.status(404).json(`Cant find an answer with this id : ${answer}`);
      } else {
        const userUpVoted = answer.upvoted.includes(userId);
        const userDownVoted = answer.downvoted.includes(userId);
        if (answerScore === 'upVote') {
          if (userUpVoted) {
            answer.score = answer.score - 1;
            const index = answer.upvoted.indexOf(userId);
            if (index > -1) {
              answer.upvoted.splice(index, 1);
            }
          }
          else if (userDownVoted) {
            answer.score = answer.score + 2;
            answer.upvoted.push(userId);
            const index = answer.downvoted.indexOf(userId);
            if (index > -1) {
              answer.downvoted.splice(index, 1);
            }
          }
          else {
            answer.upvoted.push(userId);
            answer.score = answer.score + 1;
          }
        }
        if (answerScore === 'downVote') {
          if (userUpVoted) {
            answer.score = answer.score - 2;
            answer.downvoted.push(userId);
            const index = answer.upvoted.indexOf(userId);
            if (index > -1) {
              answer.upvoted.splice(index, 1);
            }
          }
          else if (userDownVoted) {
            answer.score = answer.score + 1;
            const index = answer.downvoted.indexOf(userId);
            if (index > -1) {
              answer.downvoted.splice(index, 1);
            }
          }
          else {
            answer.score = answer.score - 1;
            answer.downvoted.push(userId);
          }
        }
        await answer.update({
          upvoted: answer.upvoted,
          downvoted: answer.downvoted,
        }, {
          where: { id: answerId },
        });
        await answer.save();
        response.json(answer);
      }
    }
    catch(error) {
      console.log(error);
      response.status(500).json(error);
    }
  },

  deleteAnswer: async (request, response)=>{
    try {
      const answerId = request.params.id;
      let answer = await Answer.findByPk(answerId);
      const user = request.session.user.id;
      if (user === answer.userId) {
        await answer.destroy();
        response.json({ message: 'La réponse a bien été supprimée'});
      } else {
        response.status(500);
        console.log('patate de forain');
      }
    } catch (error) {
      response.status(500).send(error);
    }
  },

};

module.exports = answerController;
