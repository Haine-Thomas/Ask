const dotenv = require('dotenv');
dotenv.config();

const User = require('./app/models/user');
const Tag = require('./app/models/tag');
const Question = require('./app/models/question');

// TEST DE LA CLASSE User

User.findByPk(1).then(user => {
        console.log(user.dataValues);
});

// TEST DE LA CLASSE Tag

Tag.findAll().then(instances => {
        for (let instance of instances) {
                console.log(instance.dataValues);
        }
});

// TEST DE LA CLASSE Question

Question.findByPk(1).then(question => {
        console.log(question.dataValues);
});