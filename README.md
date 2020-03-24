# project-ask

## Commandes terminal

- Lancer React ```yarn start-front```
- Lancer le server node ```yarn start-server```
- Lancer les deux en même temps ```yarn start```

## Liste des routes pour contacter le server

- adresse du server ```'http://localhost:3000'```

### Routes de la table question

- Récupérer la liste des question avec les auteurs & leur tag ```get '/'```
- Poster une question ```post '/question'```
- Récupérer une question ```get '/question/:id'```
- Modifier une question (son content) ```patch '/question/:id'```
- Modifier le score d'une question ```patch '/question/:id/:score'```
- Supprimer une question ```delete '/question/:id'```
- Récupérer les question d'un seul tag ```get '/question/tag/:id'```

### Routes de la table answer

- Récupérer les réponse d'une question ```get '/question/:id/answers'```
- Poster une réponse ```post '/question/:id/answer'```
- Modifier une réponse ```patch '/answer/:id'```
- Modifier le score d'une réponse ```patch '/answer/:id/:score'```
- Supprimer une réponse ```delete '/answer/:id'```

### Routes de la table tag

- Récupérer les tag ```get '/tags'```

### Routes de la table user

- Récupérer les informations d'un utilisateur ```get '/user/:id'```
- Permettre à un utilisateur de se connecter ```post '/login'```
- Permettre à un utilisateur de se déconnecter ```get '/disconnect'```
- Permettre à un utilisateur de créer un compte ```post '/inscription'```
- Permettre à un utilisateur d'accéder à SON profil ```get '/monprofil'```
- Supprimer son compte utilisateur ```delete '/user/:id'```
- Modifier son compte utilisateur ```patch '/user/:id'```

### 23/03/2020

création de la branche fullstack, de la branche inscription, de la branche addquestion

connexion au base de donnée pour les différentes branches

controled inputs and state for signin form(ok)

- création de SignIn.js dans src/action
- modification du index.js dans src/components/App
- modification du index.js dans src/components/SignIn
- modification du index.js dans src/containers/SignIn
- modification du index.js dans src/reducers
- modification du SignIn.js dans src/reducers

user signIn with post request(ok), bodyParser with settings

- modification de userController.js dans app/controllers
- installation de body-parser
- modification de server.js
- modification de SignIn.js dans src/actions
- modification de index.js dans src/components/SignIn
- modification de index.js dans src/containers/SignIn
- changement de src/middleware/ajaxMiddleware.js en src/middleware/ajaxQuestionMiddleware.js
- modification de ajaxQuestionMiddleware.js dans src/middleware/ajaxQuestionMiddleware
- création de ajaxUserMiddleware.js dans src/middleware
- modification de SignIn.js dans src/reducers
- modification de index.js dans src/store

# 24/03/2020

## ProfilPage

- modification index.js dans src/components/ProfilPage
- création de ProfilPageStyled.js dans src/components/ProfilPage

## AnswerPage

- modification index.js dans src/components/AnswerPage
- création de AnswerPageStyled.js dans src/components/AnswerPage
