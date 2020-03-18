const dotenv = require('dotenv');
dotenv.config();
// Création du port de connection soit définie dans ".env" soit sur le port 3000.
const PORT = process.env.PORT || 3000;
// Importation du node module express.
const express = require('express');

const app = express();

// Le routage
const router = require('./app/router');
app.use(router);

// Lancement du serveur.
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});