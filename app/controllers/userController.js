const User = require('../models/user');

const userController = {
    getUserById: async (request, response) => {
        const userId = parseInt(request.params.id);
        try {
            const user = await User.findByPk(userId);
            response.json({user});
        } catch (error) {
            response.status(500).send(error);
        } 
    },
}

module.exports = userController;