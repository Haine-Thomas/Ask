# project-ask
Cahier des charges - Ask   
https://tenor.com/2Wbx.gif      

Description du projet:

Une app qui permet de partager ses histoires les plus drôles, creepy, tristes en répondant à une question d'un user ou du site ou de poser ses questions.

Pourquoi ce site?
Les gens partagent sans cesse leurs histoires quand ils se rencontrent qu'elle soit triste ou à mourir de rire sur tous les sujets et parfois ils se posent des questions intéressantes
Le but du site est de permettre aux users de partager leurs histoires persos ou de simplement répondre sur des questions marrantes ou sérieuses que posent les users du site même.

Ils peuvent poser une question un peu bizarre ou intéressante et permettre aux users de répondre assSez librement ou soit sérieusement (des Tags catégorisent les questions).

Par exemple "Pourquoi aimez-vous être en vie ?" ou "Si Ok Boomer était comme un Ok Google, quelle sortes de réponses donnerait-il à certaines questions?"
ou "C'est quoi le site le plus cool que vous ayez visité mais que personne ne connaît?". Les questions peuvent même s'adresser à une communauté particulière comme " Serveurs ou serveuses,
quelles sont les pires désastres de la St-Valentin que vous ayez vus?"

Les questions peuvent être assez bêtes comme assez profondes. Les gens partageraient leurs histoires ou anecdotes en réponse à ces questions.
Le système de notation permets aux meilleurs questions/réponses de ressortir sur le site.
Le user doit pouvoir avoir un profil avec ses questions et ses posts.

<a href="https://zupimages.net/viewer.php?id=20/41/97pv.jpg"><img src="https://zupimages.net/up/20/41/97pv.jpg" alt="" /></a>
<a href="https://zupimages.net/viewer.php?id=20/41/6m8b.jpg"><img src="https://zupimages.net/up/20/41/6m8b.jpg" alt="" /></a>

MVP

On a un système de profils(login,logout, page profil).

Un input pour poser la question et un input pour répondre à la question.

Un système de notations sera mis en place et remonte automatiquement les questions les plus upvote, même système pour les réponses.
Au bout d'un certain nombre de downvotes la question est supprimée, la réponse qui dépasse un certain nombre de downvote, la réponse est caché, il faut cliquer dessus pour la voir.

Le bouton Best remonte les meilleurs questions/réponses.
Le bouton New permets de faire apparaître les questions les plus récentes.

→ Système de tags, un tag par question pour les catégoriser et les trier.

Une barre de recherche permets de chercher des questions avec des mots précis ou en sélectionnant un tag ou des users.


BONUS
Le bouton Trending permet de remonter les questions les plus upvote

-Une charte existe pour encadrer les règles du site. Le user doit l'accepter pour s'inscrire. Si le user ne la respecte pas --> IL EST BAN.

-Un système de report pour flag les questions inappropriées ou offensantes, à partir d'un certains nombres de reports la question est supprimée.


Liste des technos
Front:
React, VanillaJS, Redux

Back:

PostgreSQL:

Création de la base de donnée + config des droit d'accès.
Création des tables & de donnée fictives (pour le moment).
Facultatif: Utilisation de dbeaver pour les modifications de la bdd (j'aime cet outil).
On utilisera insomnia pour tester nos requêtes, ainsi nous n'auront dans ce repo aucun fichier front.
 
NodeJs:

Mise en place des dépendances: express (pour le serveur) & dot_env (pour l'environnement de dev).
Lancement du serveur.
Installation de sequelize (ORM) pour facilité la liaison avec la bdd.
Architecture du code: Un dossier App avec - un dossier models avec un model par entité & un core model pour les data répétitives (id et création) - un dossier middlewares avec tous nos middlewares (si besoin) - un dossier controllers avec un controller par entité - un fichier router avec toute nos routes - un fichier dbConnection

