--
-- Base de données :  "ASK"
--

BEGIN;

INSERT INTO "user" ("id", "name", "email", "password", "created_at", "updated_at") VALUES
(1, 'Mushi', 'thomahaine@gmail.com', '12345', '2020-03-13 12:15:33', NULL);

INSERT INTO "question"("id", "content", "created_at", "updated_at", "user_id","tag_id", "score","upvoted", "downvoted") VALUES
(1, 'Est-ce que les chats peuvent nous tuer?', '2020-03-13 15:15:33', NULL, 1, 1, 0, '{0}', '{0}'),
(2, 'C''est quoi ton film et pourquoi je devrais le regarder?','2020-03-13 15:15:33', NUll, 1, 3, 0, '{0}', '{0}');

INSERT INTO "answer"("id","content", "created_at", "updated_at", "question_id","user_id", "score") VALUES
(1, 'Pour sûr il peuvent t''arracher les yeux', '2020-03-13 15:30:00', NULL, 1, 1, 0),
(2, 'Ils sont innocents et trop mignons donc c''est non pour moi', '2020-03-13 15:30:00', NULL, 1, 1, 5),
(3, 'Ce sont de petits diables, le mien m''a arraché l''oreille', '2020-03-13 15:30:00', NULL, 1, 1, 15);

INSERT INTO "tag"("id", "name", "status", "created_at", "updated_at") VALUES
(1, 'DRÔLE', 'true','2020-03-13 15:15:33', NULL),
(2,'CREEPY', 'true','2020-03-13 15:15:33', NULL),
(3, 'SERIEUX', 'true','2020-03-13 15:15:33', NULL),
(4, 'CULTURE', 'true','2020-03-13 15:15:33', NULL),
(5, 'GEEK', 'true','2020-03-13 15:15:33', NULL),
(6, 'SPORT', 'true','2020-03-13 15:15:33', NULL),
(7, 'STORY', 'true','2020-03-13 15:15:33', NULL);
(
