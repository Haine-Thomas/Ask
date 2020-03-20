// fichier test
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
// TEST DE LA CLASSE Question avec les réponses/tags/author associées

// A adapter au test voulue.
/*
Question.findByPk(2, {
        include: ['tag']
}).then(question=> {
        console.log(question.dataValues);
});

*/

// TEST DE LA CLASSE Answer
/*
Answer.findByPk(1, {
        include: ['author']
}).then(answer => {
        console.log(answer.dataValues);
});
*/

/*
Question.findAll().then(instances => {
        for (let instance of instances) {
                console.log(instance.dataValues);
        }
});
*/