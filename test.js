const dotenv = require('dotenv');
dotenv.config();

const User = require('./app/models/user');
const Tag = require('./app/models/tag');

// TEST DE LA CLASSE User

User.findByPk(1).then(user => {
        console.log(user.dataValues);
});

Tag.findAll().then(instances => {
        for (let instance of instances) {
                console.log(instance.dataValues);
        }
});