// Un middlware afin de tester si un utilsateur est connecté et stocker ses informations
// dans une variable global (dans locals de ejs) afin de pouvoir y accéder partout
const userMiddleware = (request, response, next) => {
// Si l'utilisateur existe on le stocke dans les locals
  if (request.session.user) {
    response.locals.user = request.session.user;
  }
  else {
    response.locals.user = false;
  }

  // Afin de redonner la main au middleware suivant on exécute la methode next
  next();
};

module.exports = userMiddleware;
