const User = require('../models/user');
// pour l'action de login
const bcrypt = require('bcrypt');

// pour l'action de l'inscription
const emailValidator = require('email-validator');

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

    //pour tester loginAction
    loginPage: (request, response) => {
        response.render('login');
    },

    loginAction: async (request, response) => {
        try {
            // On cherche l'utilisateur correspondant à l'email rentré dans l'input du formulaire de login.
            const user = await User.findOne({
                where: {
                    email: request.body.email
                }
            });
            // Si l'email ne correspond à aucun utilisateur on renvoit un json "error" avec l'erreur expliquée.
            if (!user) {
                return response.json({ error: "Cet email n'existe pas" });
            }

            const passwordExpected = user.getPassword();

            // Ici on compare grace à bcrypt le password de l'instance user trouvé plus haut avec le password rentré dans l'input du formulaire de login.
            const hashedPassword = await bcrypt.hash(passwordExpected ,10);
            const validPassword = await bcrypt.compare(request.body.password, hashedPassword);
            console.log(validPassword);
            // Si celui ci ne correspond pas on renvoit une erreur en json (comme au dessu).
            if (!validPassword) {
                return response.json({ error: "Ce n'est pas le bon mot de passe" });
            }
            // On modifie les valeurs de la session utilisateur avec les données de notre instance user
            request.session.user = user.dataValues;
            delete request.session.user.password;
            return response.redirect('/');
        } catch (error) {
            response.status(500).send(error);
        }
    },

    // une méthode pour se déconnecter
    disconnect: (request, response) => {
        delete request.session.user;
        return response.redirect('/');
    },

    myProfilPage:(request, response) => {
        if(!request.session.user) {
            return response.redirect('/login');
        }
        response.json({ user: request.session.user});
    },

    signUpAction : async (request, response) => {
        try{
            const user =  await User.findOne({
            where: {
                email:request.body.email,
            }
        });

        const username = await User.findOne({
            where: {
                name:request.body.name
            }
        });

        if(user) {
            return response.json({ error: "Cet email est déjà utilisé pas un utilisateur "});
        }

        if(username){
            return response.json({ error: "Ce pseudo est déjà utilisé pas un utilisateur "});
        }

        if(request.body.password !== request.body.confirmPassword){
            return response.json({ error: "La confirmation du mot de passe a échoué"});
        }

        if (!emailValidator.validate(request.body.email)) {
            return response.json({error: "Cet email n'est pas valide."});
          }
              
        let newUser = new User();
        newUser.setEmail(request.body.email);
        newUser.setName(request.body.name);
        const encryptedPwd = bcrypt.hashSync(request.body.password, 10);
        newUser.setPassword(encryptedPwd);
        await newUser.save()
        response.json({newUser});

        } catch(error) {
            response.status(500).send(error);
        }
    },
}

module.exports = userController;