const sequelize = require('sequelize');
// On importe notre BDD grace à la connection.
const DBConnection = require('../dbConnection');

const Answer = require('./answer');
const User = require('./user');
const Tag = require('./tag');

// Création de la classe Question ansi que quelques setter et getter (pour tester)
class Question extends sequelize.Model {};

// Ici un initialise notre classe avec les données de la BDD
Question.init(
    {
        content: sequelize.STRING,
        score: sequelize.INTEGER,
        userId:{
            type: sequelize.INTEGER,
            field: "user_id"
        },
        questionId: {
            type: sequelize.INTEGER,
            primaryKey: true,
            field:"question_id",
        },
        tagId: {
            type: sequelize.INTEGER,
            field: "tag_id"
        }
    },
    {
        sequelize: DBConnection,
        tableName: "question",
        createdAt: "created_at",
        updatedAt: "updated_at"
    },
);

Question.hasMany(Answer, {
    foreignKey: "question_id",
    as: "answers"
});

Answer.belongsTo(Question, {
    foreignKey: "question_id",
    as: "question"
});

Question.belongsTo(User, {
    foreignKey: 'user_id',
    as: 'author'
});

User.hasMany(Question, {
    foreignKey: 'question_id',
    as: "questions"
});

Question.belongsTo(Tag, {
    foreignKey:'tag_id',
    as:"tag"
});

Tag.hasMany(Question, {
    foreignKey:'tag_id',
    as:"questions"
});

module.exports = Question;