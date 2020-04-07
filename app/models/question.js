const sequelize = require('sequelize');
// On importe notre BDD grace à la connection.
const DBConnection = require('../dbConnection');

// On importe nos fichiers pour s'en servir dans les relations
const Answer = require('./answer');
const User = require('./user');
const Tag = require('./tag');

// Création de la classe Question ansi que quelques setter et getter (pour tester)
class Question extends sequelize.Model {}

// Ici un initialise notre classe avec les données de la BDD
Question.init(
  {
    content: sequelize.STRING,
    userId: {
      type: sequelize.INTEGER,
      field: 'user_id',
    },
    score: {
      type: sequelize.INTEGER,
      defaultValue: 0,
    },
    tagId: {
      type: sequelize.INTEGER,
      field: 'tag_id',
    },
    upvoted: {
      type: sequelize.ARRAY(sequelize.INTEGER),
    },
    downvoted: {
      type: sequelize.ARRAY(sequelize.INTEGER),
    },
  },
  {
    sequelize: DBConnection,
    tableName: 'question',
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
);

// Relations

// Une question a plusieurs réponses.
Question.hasMany(Answer, {
  foreignKey: 'question_id',
  as: 'answers',
});

// Une réponse n'appartient qu'à une question
Answer.belongsTo(Question, {
  foreignKey: 'question_id',
  as: 'question',
});

// Une question appartient à un utilisateur
Question.belongsTo(User, {
  foreignKey: 'user_id',
  as: 'author',
});

// Un utilisateur a plusieurs questions
User.hasMany(Question, {
  foreignKey: 'user_id',
  as: 'questions',
});

// Une question n'a qu'un tag
Question.belongsTo(Tag, {
  foreignKey: 'tag_id',
  as: 'tag',
});

// Un tag peut être apposé a plusieurs questions
Tag.hasMany(Question, {
  foreignKey: 'tag_id',
  as: 'questions',
});

module.exports = Question;
