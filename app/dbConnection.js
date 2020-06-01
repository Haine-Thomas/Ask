const sequelize = require('sequelize');

// création de la connection à la base de donnée.
const DBConnection = new sequelize.Sequelize(process.env.PG_URL);

// On exporte notre connection
module.exports = DBConnection;
