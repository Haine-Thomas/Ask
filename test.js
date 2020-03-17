const dotenv = require('dotenv');
dotenv.config();

const User = require('./app/models/user');
const Tag = require('./app/models/tag');
const Question = require('./app/models/question');
const Answer = require('./app/models/answer');

// TEST DE LA CLASSE User

/*
User.findByPk(1).then(user => {
        console.log(user.dataValues);
});
*/

// TEST DE LA CLASSE Tag

/*
Tag.findAll().then(instances => {
        for (let instance of instances) {
                console.log(instance.dataValues);
        }
});
*/

// TEST DE LA CLASSE Question avec les réponses associées

/*
Question.findByPk(1, {
        include: ['answers']
}).then(question => {
        console.log(question.dataValues.answers);
});
*/

// TEST DE LA CLASSE Answer

/*
Answer.findByPk(1, {
        include: ['question']
}).then(answer => {
        console.log(answer.dataValues);
});
*/
