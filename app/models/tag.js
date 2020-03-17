const sequelize = require('sequelize');
// On importe notre BDD grace à la connection.
const DBConnection = require('../dbConnection');

// Création de la classe Tag ansi que quelques setter et getter (pour tester)
class Tag extends sequelize.Model {};

// Ici un initialise notre classe avec les données de la BDD
Tag.init(
    {
        name: sequelize.STRING,
        status: sequelize.BOOLEAN,
        tagId: {
            type: sequelize.INTEGER,
            primaryKey: true,
            field:"tag_id",
        }
    },
    {
        sequelize: DBConnection,
        tableName: "tag",
        createdAt: "created_at",
        updatedAt: "updated_at"
    },
);

module.exports = Tag;