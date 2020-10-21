const sequelize = require('sequelize');
// Le module emailValidator permet de vérifier si la valeur de la "string" est bien de type email.
const emailValidator = require('email-validator');
// On importe notre BDD grace à la connection.
const DBConnection = require('../dbConnection');

// Création de la classe User ansi que quelques setter et getter (pour tester)
class User extends sequelize.Model {
// Get and Set mis en place
  getName() {
    return this.name;
  }

  setName(value) {
    if (typeof value !== 'string') {
      throw Error('User.name must be a string');
    }
    else {
      this.name = value;
    }
  }

  getEmail() {
    return this.email;
  }

  setEmail(value) {
    if (!emailValidator.validate(value)) {
      throw Error('User.email must be a valid email!');
    }
    this.email = value;
  }

  getPassword() {
    return this.password;
  }

  setPassword(value) {
    if (typeof value !== 'string') {
      throw Error('User.password must be a string');
    }
    else {
      this.password = value;
    }
  }

  getSecretToken() {
    return this.secretToken;
  }

  setSecretToken(value) {
    if (typeof value !== 'string') {
      throw Error('User.secretToken must be a string');
    }
    else {
      this.secretToken = value;
    }
  }
}

// Ici un initialise notre classe avec les données de la BDD
User.init(
  {
    name: sequelize.STRING,
    email: sequelize.STRING,
    password: sequelize.STRING,
    isConfirmed: sequelize.BOOLEAN,
    secretToken: sequelize.STRING,
  },
  {
    sequelize: DBConnection,
    tableName: 'user',
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
);

module.exports = User;
