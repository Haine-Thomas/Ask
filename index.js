const dotenv = require('dotenv');
dotenv.config();
// Création du port de connection soit définie dans ".env" soit sur le port 3000.
const PORT = process.env.PORT || 3000;
// Importation du node module express.
const express = require('express');
const router = require('./app/router');
const app = express();


/******** Reservé aux tests !! ********/

// réglage des views
app.set('views', 'app/views');
app.set('view engine', 'ejs');

/******** Reservé aux tests !! ********/

// Réglage et gestion des sessions
const session = require('express-session');
// Initialisation du cookie de connection "connect.sid" dans les devTools.
app.use(session({
  saveUninitialized: true,
  resave: false,
  secret: "chez ask on fait des blagues pas drôles"
}));

// Middleware pour verifier si une session utilisateur est active
const userMiddleware = require('./app/middlewares/user');
app.use(userMiddleware);

// Le routage
app.use(router);

// Lancement du serveur.
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});