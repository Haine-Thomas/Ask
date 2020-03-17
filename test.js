const dotenv = require('dotenv');
dotenv.config();

const User = require('./app/models/user');

// TEST DE LA CLASSE User

User.findByPk(1, {
    attributes: ['name', 'email', 'password']
}).then(user => {
        console.log(user.dataValues);
});