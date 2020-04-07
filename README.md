# project-ask

## 25/03/2020

création de 4 branche pour définir du css et de l'exposer aux autre:
- damiencss (animation, style ecriture et couleur)
- vanessacss (page profil avec style ecriture, couleur app, passage de la barre de nav au dessus du header, bouton connecté)
- totocss (suite a correction bug aucun visu)
- thomascss (couleur app, style ecriture et autres)
  
résultat: idées retenues du coté de vanessa et nicolas
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

### 26/03/2020

création branche dateformat
création branche AnswerPage
création branche captchainscription
création branche searchbox

#### dateformat

##### responsive design and answer number on question components

- modification de LoginFormStyled.js dans src/components/Nav/Settings/LoginForm
- modification de SortButtonsStyled.js dans src/components/Nav/SortButtons
- modification de CounterStyled.js dans src/components/QuestionsPage/Question/Counter
- modification de QuestionStyled.js dans src/components/QuestionsPage/Question
- modification de index.js dans src/components/QuestionsPage/Question
- modification de SignInStyled.js dans src/components/SignIn
- modification de question.js dans src/reducers

##### few css

- modification de SortButtonsStyled.js dans src/components/Nav/SortButtons
- modification de QuestionStyled.js dans src/components/QuestionsPage/Question

##### little css

- modification de SortButtonsStyled.js dans src/components/Nav/SortButtons

##### css

- modification de SortButtonsStyled.js dans src/components/Nav/SortButtons
- modification de CounterStyled.js dans src/components/QuestionsPage/Question/Counter
- modification de index.js dans src/components/QuestionsPage/Question/Counter
- modification de QuestionStyled.js dans src/components/QuestionsPage/Question

##### ended css from nicocss branch 

- modification de AppStyled.js dans src/components/App
- modification de SortButtonsStyled.js dans src/components/Nav/SortButtons
- modification de CounterStyled.js dans src/components/QuestionsPage/Question/Counter
- modification de index.js dans src/components/QuestionsPage/Question/Counter
- modification de QuestionStyled.js dans src/components/QuestionsPage/Question
- modification de index.js dans src/components/QuestionsPage/Question

##### merge branch nicocss sur fullstackapp

##### react-moment for dates and date formated for question composant

- installation de react-moment
- modification de index.js dans src/components/QuestionsPage/Question

#### searchbox

##### question created alert ok

- modification de ajaxQuestionMiddleware.js dans src/middleware

#### captchainscription

##### captcha ok
- installation de react-recaptcha
- modification de SignIn.js dans src/actions
- modification de index.html dans src/assets
- modification de index.js dans src/components/SignIn
- modification de index.js dans src/containers/SignIn
- modification de SignIn.js dans src/reducers

#### AnswerPage

##### structure AnswerPage in progress

- création de AnswersPage dans src/components
- création de Answer dans src/components/AnswersPage
- création de son index.js et de son AnswerStyled.js
- création de index.js et de AnswersPageStyled.js dans src/components/AnswersPage

##### answer state

- création de AnswersPage dans src/components
- création de Answer dans src/components/AnswersPage
- création de son index.js et de son AnswerStyled.js
- création de index.js et de AnswersPageStyled.js dans src/components/AnswersPage

##### answer counter

- création de Counter dans src/components/AnswersPage/Answer
- création de CounterStyled dans src/components/AnswersPage/Answer
- création de son index.js dans src/components/AnswersPage/Answer/Counter
- modification de index.js dans src/components/AnswersPage/Answer
- modification de index.js dans src/components/AnswersPage
- création de Counter dans src/containers/AnswersPage/Answer
- création de index.js dans src/containers/AnswersPage/Answer/Counter
- bug

##### answer data recuperation in progress

- modification de answer.js dans src/action
- modification de index.js dans src/components/AnswersPage/Answer
- modification de index.js dans src/components/AnswersPage
- modification de index.js dans src/containers/AnswersPage/Answer/Counter
- modification de index.js dans src/containers/AnswersPage
- modification de answer.js dans src/reducers
- bug

### 27/03/2020

####  branche AnswerPage

##### debug answer data recuperation

- modification de answer.js dans src/actions
- modification de index.js dans src/components/AnswersPage/Answer

##### debug answer data recuperation

- modification de question.js dans src/action
- modification de index.js dans src/components/AnswersPage/Answer
- modification de index.js dans src/components/QuestionssPage/Question
  
##### clickedQuestionId in question state

- modification de index.js dans src/components/AnswersPage
- modification de index.js dans src/components/QuestionsPage/Question
- modification de index.js dans src/components/QuestionsPage
- création de index.js dans src/containers/QuestionsPage/Question
- modification de question.js dans src/reducers

##### include question to answers request

- modification de answerController.js dans app/controllers

##### add a local storage and componant answer ok

- installation de lodash.thottle
- modification de answer.js dans src/actions
- modification de index.js dans src/components/AnswersPage/Answer
- modification de index.js dans src/components/AnswersPage
- modification de index.js dans src/App
- modification de index.js dans src/containers/AnswersPage
- suppression de ajaxAnswerMiddleware.js dans src/middleware
- modification de answer.js dans src/reducers
- modification de index.js dans src/store
- modification de AnswerStyled.js dans src/components/AnswersPage/Answer
- modification de AnswersPageStyled.js dans src/components/AnswersPage
- modification de index.js dans src/components/QuestionsPage/Question

####  branche ProfilPage2vanessa

##### pageprofil

- installation de react-avatar
- installation de react-moment
- modification de AppStyled.js dans src/components/App
- modification de FooterStyled.js dans src/components/Footer
- modification de HeaderStyled.js dans src/components/Header
- modification de NavStyled.js dans src/components/Nav
- modification de LoginFormStyled.js dans src/components/Nav/Settings/LoginForm
- modification de index.js dans src/components/Nav/Settings/LoginForm
- modification de index.js dans src/components/Nav/Settings
- modification de ProfilPageStyled.js dans src/components/ProfilPage
- modification de index.js dans src/components/ProfilPage
- modification de QuestionsPageStyled.js dans src/components/QuestionsPage
- modification de index.js dans src/components/QuestionsPage/Question
- modification de QuestionStyled.js dans src/components/QuestionsPage/Question
- modification de SignInStyled.js dans src/components/SignIn
- modification de login.js dans src/reducers

##### profilpage next

- modification de index.js dans src/components/ProfilPage
- modification de index.js dans src/containers/ProfilPage
- modification de SignIn.js dans src/reducers

##### editUser correction on route back

- modification de userController.js dans app/controllers

##### style of header

- modification de AppStyled.js dans src/components/App
- modification de FooterStyled.js dans src/components/Footer
- modification de HeaderStyled.js dans src/components/Header
- modification de QuestionStyled.js dans src/components/QuestionsPage/Question
- modification de QuestionsPageStyled.js dans src/components/QuestionsPage
- modification de index.js dans src/components/ProfilPage
- modification de index.js dans src/components/QuestionsPage
- modification de SignInStyled.js dans src/components/SignIn
- modification de SSortButtonsStyled.js dans src/components/Nav/SortButtons

### 28/03/2020

####  branche Score

##### upvote and down vote ok with database changing

- modification de index.js dans src/actions
- modification de question.js dans src/actions
- modification de index.js dans src/components/QuestionsPage/Question/Counter
- modification de index.js dans src/components/QuestionsPage/Question
- modification de index.js dans src/containers/App
- modification de ajaxQuestionMiddleware.js dans src/middleware
- modification de index.js dans src/reducers
- modification de quetsion.js dans src/reducers

##### userId pushed into database arrayfield that so coool

- modification de questionController.js dans app/controllers
- modification de question.js dans app/models
- modification de ajaxQuestionMiddleware.js dans src/middleware
- modification de import_tables.sql dans data

### 29/03/2020

####  branche AnswerPage

##### check is logged

- modification de login.js dans src/actions
- modification de index.js dans src/components/App
- modification de index.js dans src/containers/App
- modification de LogMiddleware.js dans src/middleware

##### style answer

- modification de AnswerStyled.js dans src/components/AnswersPage/Answer
- modification de index.js dans src/components/AnswersPage/Answer

#### Branche profilepage2vanessa

##### delete user

- modification de login.js dans src/actions
- modification de SignIn.js dans src/actions
- modification de LoginFormStyled.js dans src/components/Nav/Settings/LoginForm
- modification de index.js dans src/components/Nav/Settings/LoginForm
- modification de index.js dans src/components/Nav/SortButtons
- modification de ProfilPageStyled.js dans src/components/ProfilPage
- modification de index.js dans src/components/ProfilPage
- modification de QuestionStyled.js dans src/components/QuestionsPage/Question
- modification de QuestionsPageStyled.js dans src/components/QuestionsPage
- modification de index.js dans src/components/QuestionsPage
- modification de SignInStyled.js dans src/components/SignIn
- modification de index.js dans src/components/SignIn
- modification de index.js dans src/containers/ProfilPage
- modification de ajaxMiddleware.js dans src/middleware
- modification de ajaxQuestionMiddleware.js dans src/middleware
- modification de ajaxUserMiddleware.js dans src/middleware
- modification de logMiddleware.js dans src/middleware
- modification de counter.js dans src/reducers
- modification de login.js dans src/reducers
- modification de tags.js dans src/reducers

#### branche deleteuser

##### delete user from table user ok

- installation de react-avatar
- modification de login.js dans src/actions
- modification de AppStyled.js dans src/components/App
- modification de FooterStyled.js dans src/components/Footer
- modification de HeaderStyled.js dans src/components/Header
- modification de NavStyled.js dans src/components/Nav
- modification de LoginFormStyled.js dans src/components/Nav/Settings/LoginForm
- modification de index.js dans src/components/Nav/Settings/LoginForm
- modification de SortButtonsStyled.js dans src/components/Nav/SortButtons
- modification de index.js dans src/components/Nav/SortButtons
- modification de ProfilPageStyled.js dans src/components/ProfilPage
- modification de index.js dans src/components/ProfilPage
- modification de QuestionStyled.js dans src/components/QuestionsPage/Question
- modification de QuestionsPageStyled.js dans src/components/QuestionsPage
- modification de index.js dans src/components/QuestionsPage
- modification de index.js dans src/containers/ProfilPage
- modification de logMiddleware.js dans src/middleware
- modification de login.js dans src/reducers

#### branche fullstackapp

##### upvote and downvote system work + some front css on counters

- modification de questionController.js dans app/controllers
- modification de CounterStyled.js dans src/components/QuestionsPage/Question/Counter
- modification de index.js dans src/components/QuestionsPage/Question/Counter
- modification de index.js dans src/components/QuestionsPage/Question
- modification de index.js dans src/containers/QuestionsPage/Question/Counter
- modification de ajaxMiddleware.js dans src/middleware
- modification de login.js dans src/reducers

##### default value for array fields in database modified

- modification de import_tables,sql dans data

##### correction in datas, insert datas in questions upvoted, downvoted ok

- modification de import_tables,sql dans data

##### branche killwindows98

##### some css for 2020

- modification de index.html dans src/assets
- modification de AppStyled.js dans src/components/App
- modification de FooterStyled.js dans src/components/Footer
- modification de HeaderStyled.js dans src/components/Header
- modification de NavStyled.js dans src/components/Nav
- modification de SearchBarStyled.js dans src/components/Nav/SearchBar
- modification de index.js dans src/components/Nav/SearchBar
- modification de LoginFormStyled.js dans src/components/Nav/Settings/LoginForm
- modification de SortButtonsStyled.js dans src/components/Nav/SortButtons
- modification de index.js dans src/components/Nav/SortButtons
- modification de CounterStyled.js dans src/components/QuestionsPage/Question/Counter
- modification de QuestionStyled.js dans src/components/QuestionsPage/Question
- modification de QuestionsPageStyled.js dans src/components/QuestionsPage
- modification de index.js dans src/components/QuestionsPage

### 30/03/2020

#### branche answerpage

##### some css for answer page

- modifiction de answerStyled.js dans src/components/AnswersPage/Answer

##### SortButtons on answerpage

- modifiction de index.js dans src/components/AnswersPage/Answer
- création de SortButtons dans src/components/AnswersPage
- création de index.js dans src/components/AnswersPage/SortButtons
- création de SortButtonsStyled.js dans src/components/AnswersPage/SortButtons

##### button delete and modify

- modifiction de index.js dans src/components/AnswersPage/Answer
- modifiction de AnswerStyled.js dans src/components/AnswersPage/Answer

##### work on answerpage

- modification de index.js dans src/store
- modification de answer.js dans src/actions
- modification de index.js dans src/components/AnswersPage/Answer/Counter
- modification de index.js dans src/components/AnswersPage/Answer
- modification de index.js dans src/components/AnswersPage/SortButtons
- modification de index.js dans src/containers/QuestionsPage
- modification de index.js dans src/containers/AnswersPage/Answer/Counter
- modification de index.js dans src/containers/AnswersPage/Answer
- modification de ajaxAnswerMiddleware.js dans src/middleware
- modification de index.js dans src/store

#### branche fullstackapp

##### bug fixed on deleteUser route

- modification de userController.js dans app/controllers

##### delete user_account ok

- modification de index.js dans src/components/ProfilPage
- modification de index.js dans src/containers/ProfilPage
- modification de logMiddleware.js dans src/middleware

##### merge branch profilpage2vanessa into fullsatckapp

- modification de userController.js dans app/controllers
- installation de react-avatar
- modification de login.js dans src/actions
- modification de AppStyled.js dans src/components/App
- modification de FooterStyled.js dans src/components/Footer
- modification de HeaderStyled.js dans src/components/Header
- modification de NavStyled.js dans src/components/Nav
- modification de LoginFormStyled.js dans src/components/Nav/Settings/LoginForm
- modification de index.js dans src/components/Nav/Settings/LoginForm
- modification de LoginFormStyled.js dans src/components/Nav/Settings
- modification de SortButtonsStyled.js dans src/components/Nav/SortButtons
- modification de index.js dans src/components/Nav/SortButtons
- modification de ProfilPageStyled.js dans src/components/ProfilPage
- modification de index.js dans src/components/ProfilPage
- modification de QuestionStyled.js dans src/components/QuestionsPage/Question
- modification de index.js dans src/components/QuestionsPage/Question
- modification de QuestionPageStyled.js dans src/components/QuestionsPage
- modification de index.js dans src/components/QuestionsPage
- modification de SignInStyled.js dans src/components/SignIn
- modification de index.js dans src/containers/ProfilPage
- modification de ajaxMiddlewareTags.js dans src/middleware
- modification de ajaxQuestionMiddleware.js dans src/middleware
- modification de ajaxUserMiddleware.js dans src/middleware
- modification de logMiddleware.js dans src/middleware
- modification de login.js dans src/reducers
- modification de signIn.js dans src/reducers
- modification de tags.js dans src/reducers

##### debug captcha, score

- modification de questionController.js dans app/controllers
- modification de signIn.js dans src/actions
- modification de index.js dans src/components/Nav/Settings
- modification de index.js dans src/components/SignIn
- modification de index.js dans src/containers/Nav/Settings
- modification de index.js dans src/containers/SignIn
- modification de signIn.js dans src/reducers

##### commit before merge

- modification de HeaderStyled.js dans src/components/Header
- modification de NavStyled.js dans src/components/Nav
- modification de SortButtonsStyled.js dans src/components/Nav/SortButtons
- modification de CounterStyled.js dans src/components/QuestionsPage/Question/Counter
- modification de QuestionStyled.js dans src/components/QuestionsPage/Question
- modification de QuestionsPageStyled.js dans src/components/QuestionsPage
- modification de index.js dans src/components/QuestionsPage
- modification de SignInStyled.js dans src/components/SignIn

##### merge rbanch killwindows98 into fullstackapp

- modification de index.html dans src/assets
- modification de AppStyled.js dans src/components/App
- modification de FooterStyled.js dans src/components/Footer
- modification de HeaderStyled.js dans src/components/Header
- modification de NavStyled.js dans src/components/Nav
- modification de SearchBarStyled.js dans src/components/Nav/SearchBar
- modification de index.js dans src/components/Nav/SearchBar
- modification de LoginFormStyled.js dans src/components/Nav/Settings/LoginForm
- modification de SortButtonsStyled.js dans src/components/Nav/SortButtons
- modification de index.js dans src/components/Nav/SortButtons
- modification de CounterStyled.js dans src/components/QuestionsPage/Question/Counter
- modification de QuestionStyled.js dans src/components/QuestionsPage/Question
- modification de QuestionsPageStyled.js dans src/components/QuestionsPage
- modification de index.js dans src/components/QuestionsPage
- modification de SignInStyled.js dans src/components/SignIn

##### merge modification

##### loginformstyled updated

- modification de LoginFormStyled.js dans src/components/Nav/Settings/LoginForm
- modification de index.js dans src/components/QuestionsPage

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

branche siteCharter

#### css ok

- modification de index.js dans src/components/SIgnIn
- modification de SignInStyled.js dans src/components/SignIn


#### footer modal ok

branche footer

- modification de index.js dans src/components/Footer
- modification de FooterStyled.js dans src/components/Footer
- création de footer.js dans src/reducers
- création du dossier Footer dans src/containers
- création de son index.js
- création de footer.js dans src/actions
- modification de index.js dans src/App

### 02/04/2020

branche fullstackapp

#### css

- modification de LoginFormStyled.js dans src/components/Nav/Settings/LoginForm
- modification de QuestionStyled.js dans src/components/QuestionsPage/Question
- modification de index.js dans src/components/QuestionsPage/Question
- modification de QuestionsPageStyled.js dans src/components/QuestionsPage

#### ternary for answer

- modification de index.js dans src/components/QuestionsPage/Question

#### addmsg to modal modifyProfil when successfull 

- modification de index.js dans src/components/ProfilPage
- modification de index.js dans src/containers/ProfilPage
- modification de logMiddleware.js dans src/middleware
- modification de login.js dans src/reducers

#### clean last push

- modification de index.js dans src/containers/ProfilPage

#### message when questions is deleted ok

- modification de ajaxQuestionMiddleware.js dans src/middleware

#### css to breakword on question and answer to contain them when too long

- modification de AnswerStyled.js dans src/components/AnswersPage/Answer
- modification de QuestionStyled.js dans src/components/QuestionsPage/Question

#### reset searchValue with a useEffect in the component searchBar ok and... 

- modification de SearchBar.js dans src/reducers
- modification de index.js dans src/containers/Nav/SearchBar
- modification de index.js dans src/components/Nav/SearchBar
- modification de SearchBar.js dans src/actions

branche footer

#### rebuild

- modification de index.js dans src/components/Footer
- modification de FooterStyled.js dans src/components/Footer

#### footer ok but css in progress

- modification de index.js dans src/components/App
- modification de FooterStyled.js dans src/components/Footer
- modification de index.js dans src/components/Footer
- suppression de index.js dans src/containers/Footer
- suppression de footer.js dans src/reducers

### 06/04/2020

#### add comments on our code
