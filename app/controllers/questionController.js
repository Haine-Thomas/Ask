/* eslint-disable operator-assignment */
const Question = require('../models/question');

const questionController = {

  /* récupérer les questions */
  getQuestions: async (request, response) => {
    const sorted = request.params.sorted;
    try {
      const questions = await Question.findAll({
        // include: ['author', 'tag', 'answers'],
        include: [
          { association: 'author' },
          { association: 'answers', include: ['author'] },
          { association: 'tag' },
        ],
        order:[[`${sorted}`, 'DESC']],

      });
      response.json({ questions });
    }
    catch (error) {
      response.status(500).send(error);
    }
  },

  /* récupérer la question par son id */
  getQuestionById: async (request, response) => {
    // eslint-disable-next-line radix
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

  /* récupérer la question par catégorie */
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

  /* creer une question */
  createQuestion: async (request, response) => {
    try {
      const content = request.body.content;
      const tagId = request.body.tagId;
      const user = request.session.user.id;
      if (!content) {
        response.json({ error: 'il manque la question!' });
      }
      if (tagId === 'default') {
        response.json({ error: 'Choisissez un tag' });
      }
      if (user) {
        const newQuestion = new Question();
        newQuestion.content = content;
        newQuestion.userId = request.session.user.id;
        newQuestion.tagId = tagId;
        await newQuestion.save();
        response.json(newQuestion);
      } else {
        response.status(500);
      }
    }
    catch (error) {
      response.status(500).json(error);
    }
  },

  /* éditer une question */
  editQuestion: async (request, response) => {
    try {
      const questionId = request.params.id;
      const question = await Question.findByPk(questionId);
      if (!question) {
        // pas de liste pour cet id
        response.status(404).json(`Cant find a question with this id : ${question}`);
      }
      if (question.author === request.session.user.id) {
        const { content, tagId } = request.body;
        if (content) {
          question.content = content;
        }
        if (tagId) {
          question.tagId = tagId;
        }

        await question.save();
        response.json(question);
      } else {
        response.status(500);
      }
    }
    catch (error) {
      response.status(500).json(error);
    }
  },

  /* editer le score d'une question */
  editQuestionScore: async (request, response) => {
    try {
      const questionId = request.params.id;
      const questionScore = request.params.score;
      const userId = request.session.user.id;
      const question = await Question.findByPk(questionId);
      if (!question) {
        // pas de lréponse pour cet id
        response.status(404).json(`Cant find a question with this id : ${question}`);
      }
      else {
        const userUpVoted = question.upvoted.includes(userId);
        const userDownVoted = question.downvoted.includes(userId);
        if (questionScore === 'upVote') {
          if (userUpVoted) {
            question.score = question.score - 1;
            const index = question.upvoted.indexOf(userId);
            if (index > -1) {
              question.upvoted.splice(index, 1);
            }
          }
          else if (userDownVoted) {
            question.score = question.score + 2;
            question.upvoted.push(userId);
            const index = question.downvoted.indexOf(userId);
            if (index > -1) {
              question.downvoted.splice(index, 1);
            }
          }
          else {
            question.upvoted.push(userId);
            question.score = question.score + 1;
          }
        }
        if (questionScore === 'downVote') {
          if (userUpVoted) {
            question.score = question.score - 2;
            question.downvoted.push(userId);
            const index = question.upvoted.indexOf(userId);
            if (index > -1) {
              question.upvoted.splice(index, 1);
            }
          }
          else if (userDownVoted) {
            question.score = question.score + 1;
            const index = question.downvoted.indexOf(userId);
            if (index > -1) {
              question.downvoted.splice(index, 1);
            }
          }
          else {
            question.score = question.score - 1;
            question.downvoted.push(userId);
          }
        }
        await question.update({
          upvoted: question.upvoted,
          downvoted: question.downvoted,
        }, {
          where: { id: questionId },
        });
        await question.save();
        response.json(question);
      }
    }
    catch (error) {
      console.log(error);
      response.status(500).json(error);
    }
  },

  /* supprimer une question */
  deleteQuestion: async (request, response) => {
    try {
      const questionId = request.params.id;
      const question = await Question.findByPk(questionId);
      const user = request.session.user.id;
      if (question.userId === user) {
        await question.destroy();
        response.json({ message: 'La question a bien été supprimée' });
      } else {
        response.status(500);
        console.log('patate_dans_la_bouche');
      }

    }
    catch (error) {
      response.status(500).send(error);
    }
  },

  /*
    récupérer les meilleurs questions
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

    récupérer les nouvelles questions
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
