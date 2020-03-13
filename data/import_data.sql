--
-- Base de données :  "ASK"
--

BEGIN;

INSERT INTO "user" ("id", "name", "email", "password", "created_at", "avatar") VALUES
(1, "Mushi", "thomahaine@gmail.com", "ojajayapasmoyenjaja", '2020-03-13 12:15:33', "http://icons.iconarchive.com/icons/diversity-avatars/avatars/96/batman-icon.png"),

INSERT INTO "question"("id", "subject", "created_at", "user_account_id") VALUES
(1, "Est-ce que les chats peuvent nous tuer?", '2020-03-13 15:15:33', 1)

INSERT INTO "posts"("id","content", "created_at", "question_id","user_account_id") VALUES
(1, "Pour sûr il peuvent t'arracher les yeux", '2020-03-13 15:30:00', 1, 1)