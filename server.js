const dotenv = require('dotenv');
const path = require('path');

dotenv.config();
// Création du port de connection soit définie dans ".env" soit sur le port 3000.
const PORT = process.env.PORT || 5050;
// Importation du node module express.
const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const router = require('./app/router');

const app = express();

// Réglage et gestion des sessions
// Initialisation du cookie de connection "connect.sid" dans les devTools.
app.use(session({
  saveUninitialized: true,
  resave: true,
  secret: 'chez ask on fait des blagues pas drôles',
  cookie: {},
}));

app.use(bodyParser.json());
app.use((request, response, next) => {
  response.header('Access-Control-Allow-Origin', 'http://15.237.52.213');
  response.header('Access-Control-Allow-Credentials', true);
  response.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  response.header('Access-Control-Allow-Methods', 'GET, PATCH, POST, OPTIONS, PUT, DELETE');
  next();
});

// Le routage
app.use(router);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('dist'));

  app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'dist', 'index.html')));
}
// Lancement du serveur.
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
