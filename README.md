# project-ask

## Branch de développement BACK

On va commencer en paire programming pour poser les bases solides de l'API back.

Objectif: architecture solide pour que chacun puissent ajouter des fonctionnalitées facilement.


### Mise en place - Etapes avec les méthodes & technologies utilisées

- __PostgreSQL__

    Création de la base de donnée + config des droit d'accès

    Création des tables & de donnée fictives (pour le moment)

    Facultatif: Utilisation de __dbeaver__ pour les modifications de la bdd (j'aime cet outil)

    On utilisera __insomnia__ pour tester nos requettes, ainsi nous n'auront dans ce repo aucun fichier front

- __NodeJs__
  
    Mise en place des dépendances: __express__ (pour le serveur) & __dot_env__ (pour l'environnement de dev).

    Lancement du serveur.

    Installation de __sequelize__ (ORM) pour facilité la liaison avec la bdd.

    Architecture du code: Un dossier App avec

      - un dossier models avec un model par entité
  
      - un dossier middlewares avec tous nos middlewares (si besoin)
  
      - un dossier controllers avec un controller par entité
  
      - un fichier router avec toute nos routes
  
      - un fichier dbConnection
