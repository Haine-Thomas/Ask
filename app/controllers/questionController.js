/* eslint-disable operator-assignment */
const Question = require('../models/question');

const questionController = {
  getQuestions: async (request, response) => {
    const sorted = request.params.sorted;
    try {
      const questions = await Question.findAll({
        // include: ['author', 'tag', 'answers'],
        include: [
          { association: "author" },
          { association: "answers", include: ["author"] },
          { association: "tag" },
        ],
        order:[[`${sorted}`, 'DESC']],

      });
      response.json({ questions });
    }
    catch (error) {
      response.status(500).send(error);
    }
  },

  getQuestionById: async (request, response) => {
    const questionId = parseInt(request.params.id);
    try {
      const question = await Question.findByPk(questionId, {
        include: ['tag', 'author', 'answers'],
        order: [['answers', 'score', 'DESC']],
      });
      response.json({ question });
    }
    catch (error) {
      response.status(500).send(error);
    }
  },

  getQuestionByTag: async (request, response) => {
    // eslint-disable-next-line radix
    const tagId = parseInt(request.params.id);
    try {
      const questions = await Question.findAll({
        where: { tagId: `${tagId}` },
        include: ['author', 'answers'],
      });
      response.json({ questions });
    }
    catch (error) {
      response.status(500).send(error);
    }
  },

  createQuestion: async (request, response) => {
    console.log(request.session.user.id);
    try {
      const content = request.body.content;
      const tagId = request.body.tagId;
      if (!content) {
        response.json({ error: 'il manque la question!' });
      }
      if (tagId === 'default') {
        response.json({ error: 'Choisissez un tag' });
      }
      else {
        const newQuestion = new Question();
        newQuestion.content = content;
        newQuestion.userId = request.session.user.id;
        newQuestion.tagId = tagId;
        await newQuestion.save();
        response.json(newQuestion);
      }
    }
    catch(error) {
      response.status(500).json(error);
    }
  },

  editQuestion: async(request,response) => {
    try {
      const questionId = request.params.id;
      let question = await Question.findByPk(questionId);
      if (!question) {
        // pas de liste pour cet id
        response.status(404).json(`Cant find a question with this id : ${question}`);
      }
      else {
        const { content, tagId } = request.body;
        if (content) {
          question.content = content;
        }
        if (tagId) {
          question.tagId = tagId;
        }

        await question.save();
        response.json(question);
      }
    }
    catch (error) {
      response.status(500).json(error);
    }
  },

  editQuestionScore: async (request, response) => {
    try {
      const questionId = request.params.id;
      const questionScore = request.params.score;
      let question = await Question.findByPk(questionId);
      if (!question) {
        // pas de lréponse pour cet id
        response.status(404).json(`Cant find a question with this id : ${question}`);
      }
      else {
        if (questionScore === 'upVote') {
          question.score = question.score + 1;
        }
        if (questionScore === 'downVote') {
          question.score = question.score - 1;
        }
        await question.save();
        response.json(question);
      }
    }
    catch(error) {
      response.status(500).json(error);
    }
  },

  deleteQuestion: async (request, response)=>{
    try {
      const questionId = request.params.id;
      let question = await Question.findByPk(questionId);
      await question.destroy();
      response.json({ message: 'La question a bien été supprimée' });
    }
    catch (error) {
      response.status(500).send(error);
    }
  },

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
