// Importation du node module express.
const express = require('express');

// Création du port de connection soit définie dans ".env" soit sur le port 3000.
const PORT = process.env.PORT || 3000;

const app = express();

// Lancement du serveur.
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});