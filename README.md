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

### sprint1

### 23/03/2020

#### création de la branche fullstack, de la branche inscription, de la branche addquestion

#### connexion au base de donnée pour les différentes branches

#### controled inputs and state for signin form(ok)

- création de SignIn.js dans src/action
- modification du index.js dans src/components/App
- modification du index.js dans src/components/SignIn
- modification du index.js dans src/containers/SignIn
- modification du index.js dans src/reducers
- modification du SignIn.js dans src/reducers

#### user signIn with post request(ok), bodyParser with settings

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

### 24/03/2020

#### création de la branche SignIn

#### réalisation du composant SignIn

##### ajout d'erreurs et de style alert

- modification de index.html dans src/assets
- modification de ajaxUserMiddleware.js dans src/middleware

##### ajout d'options pour sweet

- modification de ajaxUserMiddlware.js

#### réalisation du composant AddQuestion

##### création de la branche AddQuestion

##### comment ajouter une nouvelle question

- création de tags.js dans src/actions
- création de index 2.css dans src/assets/styles
- création de thème 2.js dans src/assets/styles
- modification de index.js dans src/components/App
- création de SearchBarStyled 2.js dans src/components/Nav/SearchBar
- création de index 2.js dans src/components/Nav/SearchBar
- création de LoginFormStyled 2.js dans src/components/Nav/Settings/LoginForm
- création de index 2.js dans src/components/Nav/Settings/LoginForm
- création de CounterStyled 2.js dans src/components/QuestionsPage/Question/Counter
- création de index 2.js dans src/components/QuestionsPage/Question/Counter
- modification de QuestionsPageStyled.js dan src/components/QuestionsPage
- modification de index.js dans src/components/QuestionsPage
- modification de index.js dans src/containers/App
- modification de index.js dans src/containers/QuestionsPage
- création de ajaxMiddlewareTags.js dans src/middleware
- modification de index.js dans src/reducers
- modification de login.js dans src/reducers
- création de tags.js dans src/reducers
- modification de index.js dans src/store
  
#### réalisation du composant Login

##### connexion avec utilisateur états id et pseudo

- modification de userController.js dans app/controllers
- modification de server.js
- création de login.js dans src/actions
- modification de index.js dans src/components/Nav/Settings/LoginForms
- modification de index.js dans src/components/Nav/Settings
- modification de index.js dans src/components/QuestionsPage
- modification de QuestionsPageStyled.js dan src/containers/Nav/Settings/LoginForm
- modification de ajaxUserMiddleware.js dans src/middleware
- modification de logMiddleware.js dans src/middleware
- modification de login.js dans src/reducers
  
##### deconnection

- modification de userController.js dans app/controllers
- modification de login.js dans src/actions
- modification de index.js dans src/components/Nav/Settings
- modification de index.js dans src/containers/Nav/Settings
- modification de logMiddleware.js dans src/middleware
- modification de login.js dans src/reducers
  
#### merge de la branche inscription sur fullstackapp

#### merge de la branche login sur fullstackapp

#### merge de la branche AddQuestion sur fullstackapp

#### création de la branche ProfilPage

#### bouton pour fermer la page de connexion

- modification de index.js dans src/components/Nav/Settings/LoginForm
- modification de index.js dans src/components/Nav/Settings/LoginForm

#### compact error solved

- modification de index.js dans src/components/QuestionsPage
  
#### logindebug and warning if bad datas

- modification de logMiddleware.js dans src/middleware
  
#### composant profil

##### début de la création du composant

- création du composant ProfilPage dans src/components
- création de index.js de src/components/ProfilPage
- modification de index.js dans src/components/App

##### route de deconnexion

- modification de index.js dans src/components/Nav/Settings

#### work on connection and cookies

- modification de questionController.js dans app/controllers
- modification de user.js dans app/middlewares
- modification de router.js dans app
- modification de server.js
- modification de question.js dans src/actions
- modification de index.js dans src/components/QuestionsPage
- modification de index.js dans src/containers/QuestionsPage
- modification de ajaxQuestionMiddleware.js dans src/middleware
- modification de questions.js dans src/reducers

#### post question

- modification de questionController.js dans app/controllers
- modification de user.js dans app/middleware
- modification de index.js dans src/containers/App
- modification de ajaxQuestionMiddleware.js dans src/middleware
- modification de loginMiddleWare.js dans src/middleware

### 25/03/2020

#### reset question state after posted question

- modification de index.js dans src/components/QuestionsPage
- modification de question.js dans src/reducer

#### sorted by new or best

- modification de questionController.js dans src/controllers
- modification de router.js dans app
- modification de question.js dans src/actions
- modification de index.js dans src/components/Nav/SortButtons
- modification de index.js dans src/components/Nav
- modification de index.js dans src/components/QuestionsPage
- modification de index.js dans src/containers/Nav/SortButtons
- modification de ajaxQuestionMiddleware.js dans src/middleware
- modification de question.js dans src/reducers

#### add welcoming message when logged and add error on tags to post quetsion

- modification de answerController.js dans src/controllers
- modification de tagController.js dans app/controllers
- modification de questionController.js dans src/controllers
- modification de question.js dans src/actions
- modification de userController.js dans app/controllers
- modification de router.js dans app
- modification de server.js
- modification de SettingsStyled.js dans src/components/Nav/Settings
- modification de index.js dans src/components/Nav/Settings
- modification de index.js dans src/containers/Nav/Settings
- modification de ajaxQuestionMiddleware.js dans src/middleware
- modification de logMiddleware.js dans src/middleware

#### merge branch sortquestion into fullstackapp

#### merge branch ProfilPage into fullstackapp
(voir readme profilpage)

#### debug frontpage sortbutton

- modification de questionController.js dans app/controllers
- modification de router.js dans app
- modification de ajaxQuestionMiddleware.js dans src/middleware

### 31/03/2020

branche AnswerPage

#### post answer with author ok

- modification de questionController.js dans app/controllers
- modification de answer.js dans src/actions
- modification de AnswerStyled.js dans src/components/AnswersPage/Answer
- modification de index.js dans src/components/AnswersPage/Answer
- modification de index.js dans src/components/AnswersPage
- modification de index.js dans src/containers/AnswersPage/Answer
- modification de index.js dans src/containers/AnswersPage
- modification de ajaxQuestionMiddleware.js dans src/middleware
- modification de logMiddleware.js dans src/middleware
- modification de answer.js dans src/reducers
- modification de index.js dans src/reducers

#### counter on answers ok

- modification de answerController.js dans app/controllers
- modification de answer.js dans src/models
- modification de import_tables.sql dans data
- modification de answer.js dans src/actions
- modification de index.js dans src/components/AnswersPage/Answer/Counter
- modification de index.js dans src/components/AnswersPage/Answer
- modification de index.js dans src/components/AnswersPage/SortButtons
- modification de index.js dans src/containers/AnswersPage/Answer/Counter
- modification de ajaxAnswerMiddleware.js dans src/middleware
- modification de answer.js dans src/reducers

#### sort by new or best for answers

installation react-moment
- modification de answer.js dans src/actions
- modification de index.js dans src/components/AnswersPage/Answer/Counter
- modification de index.js dans src/components/AnswersPage/Answer
- modification de index.js dans src/components/AnswersPage/SortButtons
- modification de index.js dans src/containers/AnswersPage/Answer/SortButtons
- modification de answer.js dans src/reducers
- modification de login.js dans src/reducers

branche siteCharter

#### Charter composant ok, navlink ok

installation react-moment
- modification de CharterStyled.js dans src/components/SignIn/Charter
- modification de index.js dans src/components/SignIn/Charter
- modification de SignInStyled.js dans src/components/SignIn
- modification de index.js dans src/components/SignIn

#### siteCharter in progress

- modification de CharterStyled.js dans src/components/SignIn/Charter
- modification de SiteCharterStyled.js dans src/components/SignIn/Charter/SiteCharter
- modification de index.js dans src/components/SignIn/Charter/SiteCharter
- modification de index.js dans src/components/SignIn/Charter

#### in progress

- modification de index.js dans src/components/SignIn
- modification de index.js dans src/components/SignIn/Charter/SiteCharter
- modification de index.js dans src/components/SignIn/Charter

#### modal charte

- modification de SignIn.js dans src/actions
- modification de index.js dans src/components/SignIn
- modification de index.js dans src/containers/SignIn
- modification de SIgnIn.js dans src/reducers

#### a few css

- modification de SignInStyled.js dans src/components/SignIn
- modification de index.js dans src/components/SignIn

### 01/04/2020

#### css ok

- modification de index.js dans src/components/SIgnIn
- modification de SignInStyled.js dans src/components/SignIn
