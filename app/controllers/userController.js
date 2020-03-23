// pour l'action de login
const bcrypt = require('bcrypt');

// pour l'action de l'inscription
const emailValidator = require('email-validator');
const User = require('../models/user');

const userController = {
  getUserById: async (request, response) => {
    const userId = parseInt(request.params.id);
    try {
      const user = await User.findByPk(userId);
      response.json({ user });
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
    if (!request.session.user) {
      return response.redirect('/login');
    }
    response.json({ user: request.session.user});
  },

  // Possibilité d'utiliser le findOrCreate de Sequelize/ a utiliser et tester sur d'autres composants
  signUpAction : async (request, response) => {
    try{
      const user = await User.findOne({
        where: {
          email: request.body.email,
        }
      });

      const username = await User.findOne({
        where: {
          name: request.body.name,
        }
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
      newUser.setEmail(request.body.email);
      newUser.setName(request.body.name);
      // On utilise Bcrypt pour sécuriser son mdp dans la bdd
      const encryptedPwd = bcrypt.hashSync(request.body.password, 10);
      newUser.setPassword(encryptedPwd);
      // On save le nouveau user dans la bdd
      await newUser.save()
      response.json({newUser});
    } catch (error) {
      response.status(500).send(error);
    }
  },

  deleteUser: async (request, response)=>{
    try {
      const userId = request.params.id;
      let user = await User.findByPk(userId);
      await user.destroy();
      response.json({ message: "Le compte a bien été supprimé"});
    } catch (error) {
      response.status(500).send(error);
    }
  },

  editUser: async (request, response) => {
    try {
      const userId = request.params.id;
      const user = await User.findByPk(userId);
      if (!user) {
        response.status(404).json(`Ne trouve pas un user avec cette id:${userId}`)
      } else {
        const { password } = request.body;
        if (password) {
          passwordEncrypted = bcrypt.hashSync(request.body.password, 10);
          user.password = passwordEncrypted;
        }
        await user.save();
        response.json(user);
      }
    } catch (error) {
      console.error(error);
      response.status(500).json(error);
    }
  },

};

module.exports = userController;
