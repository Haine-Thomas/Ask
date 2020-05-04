// pour l'action de login
const bcrypt = require('bcrypt');

// pour l'action de l'inscription
let randomstring = require('randomstring');
const emailValidator = require('email-validator');
const mailer = require('../misc/mailer');

const User = require('../models/user');
const Question = require('../models/question');
const Answer = require('../models/answer');

const userController = {

  /* récupérer un utilisateur par son id */
  getUserById: async (request, response) => {
    const userId = parseInt(request.params.id);
    try {
      const user = await User.findByPk(userId);
      response.json({ user });
    } catch (error) {
      response.status(500).send(error);
    }
  },

  // pour tester loginAction
  loginPage: (request, response) => {
    response.render('login');
  },

  activateUser: async (request, response) => {
    // eslint-disable-next-line radix
    try {
      // On trouve le user avec le formToken entré dans l'input du form
      const user = await User.findOne({
        where: {
          secretToken: request.body.formToken,
        },
      });
      if (!user) {
        response.json({ message: `Aucun compte n'existe avec ce token`});
      }
      if (user) {
        //Si on trouve le user, on passe son statut a true et on reset son token à une string vide, on n'oublie aps le save!
        user.isConfirmed = true;
        user.secretToken = '';
        user.save();
        response.json({ message: 'Votre compte est activé!'});
      } else {
        response.json({ message: 'Token incorrect'});
      }
    } catch (error) {
      response.status(500).send(error);
    }
  },

  loginAction: async (request, response) => {
    try {
    // On cherche l'utilisateur correspondant à l'email rentré dans l'input du formulaire de login.
      const user = await User.findOne({
        where: {
          email: request.body.email,
        }
      });
        // Si l'email ne correspond à aucun utilisateur on renvoit un json "error" avec l'erreur expliquée.
      if (!user) {
        return response.json({ error: "Cet email n'existe pas" });
      }

      const passwordExpected = user.getPassword();

      // Ici on compare grace à bcrypt le password de l'instance user trouvé plus haut avec le password rentré dans l'input du formulaire de login.
      const validPassword = await bcrypt.compare(request.body.password, passwordExpected);
      // Si celui ci ne correspond pas on renvoit une erreur en json (comme au dessu).
      if (!validPassword) {
        return response.json({ error: "Ce n'est pas le bon mot de passe" });
      }
      if (user.isConfirmed === false) {
        return response.json({ error: "Votre compte n'est pas activé, veuillez vérifier votre adresse email pour confirmer votre compte et pouvoir vous connecter"})
      }
      // On modifie les valeurs de la session utilisateur avec les données de notre instance user
      request.session.user = user.dataValues;
      delete request.session.user.password;
      return response.json(request.session.user);
    } catch (error) {
      response.status(500).send(error);
    }
  },

  // une méthode pour se déconnecter
  disconnect: (request, response) => {
    delete request.session.user;
    return response.json({ message: 'Déconnecté' });
  },

  myProfilPage: (request, response) => {
    if (!request.session.user) {
      return response.redirect('/login');
    }
    response.json({ user: request.session.user });
  },

  // Possibilité d'utiliser le findOrCreate de Sequelize a utiliser et tester sur d'autres composants
  signUpAction: async (request, response) => {
    try {
      const username = await User.findOne({
        where: {
          name: request.body.name,
        },
      });

      const user = await User.findOne({
        where: {
          email: request.body.email,
        },
      });

      // On test si l'email existe déjà dans la bdd
      if (user) {
        return response.json({ error: 'Cet email est déjà utilisé pas un utilisateur '});
      }
      // On test si le pseudo est déjà présent dans la bdd
      if (username) {
        return response.json({ error: 'Ce pseudo est déjà utilisé pas un utilisateur '});
      }
      // On vérifie que les champs soit identiques
      if (request.body.password !== request.body.confirmPassword) {
        return response.json({ error: 'La confirmation du mot de passe a échoué' });
      }
      // On vérifie si le format de l'email est valide
      if (!emailValidator.validate(request.body.email)) {
        return response.json({error: "Cet email n'est pas valide."});
      }

      // Création d'un nouveau user
      let newUser = new User();
      const secretToken = randomstring.generate();
      newUser.setSecretToken(secretToken);
      newUser.setEmail(request.body.email);
      newUser.setName(request.body.name);
      // On utilise Bcrypt pour sécuriser son mdp dans la bdd
      const encryptedPwd = bcrypt.hashSync(request.body.password, 10);
      newUser.setPassword(encryptedPwd);
      // On save le nouveau user dans la bdd
      await newUser.save();
      // Création du contenu du mail à envoyer
      const html = `Bonjour et merci de vous êtes enregistré! Cliquez sur le lien et copiez et collez votre token -->${newUser.secretToken} pour verifier votre compte, <a href="http://localhost:8080/user/verify">http://localhost:8080/user/verify</a>`;

      //Envoyer le mail
      await mailer.sendEmail('askteamsup@gmail.com', newUser.email, 'Merci de verifier votre email!', html);

      response.redirect('/');
    } catch (error) {
      console.log(error);
      response.status(500).send(error);
    }
  },

  sendRecoverPassword: async (request, response) => {
    try {
      const user = await User.findOne({
        where: {
          email: request.body.email,
        },
      });
      if (!user) {
        response.json({ message: 'Cet email ne correspond à aucun compte'});
      } if (user) {
        const html = 'Bonjour! Cliquez sur le lien pour pouvoir mettre un nouveau mot de passe!</a>';
        await mailer.sendEmail('askteamsup@gmail.com', user.email, 'Nouveau mot de passe ASK', html);
        response.json({ message: 'email pour reset votre mot de passe envoyé' });
      }

    } catch (error) {
      response.status(500).send(error);
    }
  },

  /* supprimer un utilisateur */
  deleteUser: async (request, response) => {
    try {
      const userid = request.params.id;
      const user = await User.findByPk(userid);
      const questions = await Question.findAll({
        where: {
          userId: userid,
        },
      });
      const answers = await Answer.findAll({
        where: {
          userId: userid,
        },
      });
      if (questions) {
        questions.forEach((question) => {
          question.userId = 2000;
          question.save();
        });
      }
      if (answers) {
        answers.forEach((answer) => {
          answer.userId = 2000;
          answer.save();
        });
      }
      if (user.id === request.session.user.id) {
        await user.destroy();
        response.json({ message: 'Le compte a bien été supprimé'});
      } else {
        response.status(500);
      }
    } catch (error) {
      response.status(500).send(error);
    }
  },

  /* éditer un utilisateur */
  editUser: async (request, response) => {
    try {
      const userId = request.params.id;
      const user = await User.findByPk(userId);
      if (!user) {
        response.status(404).json({ message: `Ne trouve pas un user avec cette id:${userId}` });
      }
      if (user.id === request.session.user.id) {
        const { password, email } = request.body;
        if (password) {
          if (request.body.password !== request.body.confirmPassword) {
            return response.json({ error: 'La confirmation du mot de passe a échoué' });
          }
          const passwordEncrypted = bcrypt.hashSync(request.body.password, 10);
          user.password = passwordEncrypted;
        }
        if (email) {
          if (!emailValidator.validate(request.body.email)) {
            return response.json({error: "Cet email n'est pas valide."});
          }
          user.email = request.body.email;
        }
        await user.save();
        response.json(user);
      } else {
        response.status(500);
      }
    } catch (error) {
      console.error(error);
      response.status(500).json(error);
    }
  },

};

module.exports = userController;
