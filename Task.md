# Liste des taches éffectuées

## Création de la base de donnée avec PostgreSQL

### Création de la BDD et de l'utilisateur: liste des commandes

- se connecter à psql ```sudo -i -u postgres``` puis ```psql```
- Créer l'utilisateur ```CREATE USER ask WITH LOGIN PASSWORD 'ask';```
- Créer l'utilisateur ```CREATE DATABASE ask OWNER ask;```
- sortir de postgresql en faisant ctrl d puis ctrl d
- Importer les tables. Aller dans le dossier project-ask puis ```psql -U ask -f data/import_tables.sql``` puis importer les datas ```psql -U ask -f data/import_data.sql```

### Création et lancement du serveur

- Installation d'express.
- Dans un fichier "index.js" import d'express, definition du PORT de connection (configurable dans un .env et par défaut "3000") puis lancement du serveur.
- Pour lancer le server ```node index.js``` dans un terminal sur le project-ask.

### Création des dossier/fichier dans un dossier app

- un dossier models avec un model par entité
- un dossier middlewares avec tous nos middlewares (si besoin)
- un dossier controllers avec un controller par entité
- un fichier router avec toute nos routes
- un fichier dbConnection

### Connection à la base de donnée

- Installation du module 'sequelize' et 'pg'.
- Création de la connection dans le fichier: app/dbConnection
- Configuration de l'environnement de connection dans le fichier ".env" ```PG_URL=postgresql://ask:ask@localhost/ask```

### Création d'un premier model

- Création du fichier (model) user.js.
- Import de sequelize, de la dbconnection et de email-validator.
- Création de la class User grace à sequelize et de quelques getter et setter.
- Initialisation de ma classe avec toutes les data et export de la classe.
