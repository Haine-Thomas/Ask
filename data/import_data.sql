--
-- Base de données :  "ASK"
--

BEGIN;

INSERT INTO "user" ("user_id", "name", "email", "password", "admin", "created_at", "updated_at") VALUES
(1, 'Mushi', 'thomahaine@gmail.com', 'ojajayapasmoyenjaja', 'true', '2020-03-13 12:15:33', NULL);

INSERT INTO "question"("question_id", "content", "created_at", "updated_at", "user_id", "score") VALUES
(1, 'Est-ce que les chats peuvent nous tuer?', '2020-03-13 15:15:33', NULL, 1, 0);

INSERT INTO "answer"("answer_id","content", "created_at", "updated_at", "question_id","user_id", "score") VALUES
(1, 'Pour sûr il peuvent t''arracher les yeux', '2020-03-13 15:30:00', NULL, 1, 1, 0);

INSERT INTO "tag"("tag_id", "name", "status", "created_at", "updated_at") VALUES
(1, 'DRÔLE', 'true','2020-03-13 15:15:33', NULL),
(2,'CREEPY', 'true','2020-03-13 15:15:33', NULL),
(3, 'SERIEUX', 'true','2020-03-13 15:15:33', NULL),
(4, '+18', 'false','2020-03-13 15:15:33', NULL);

INSERT INTO "question_has_tag" ("tag_id", "question_id") VALUES
(3,1);