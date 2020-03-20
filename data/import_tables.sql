-----------------------------------------------------
-- Schema ASK
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Table "user_account"
-- -----------------------------------------------------
DROP TABLE IF EXISTS "user" ;

CREATE TABLE IF NOT EXISTS "user" (
  "id" SERIAL NOT NULL,
  "name" VARCHAR(50) NOT NULL,
  "email" VARCHAR(255) NOT NULL,
  "password" VARCHAR(60) NOT NULL,
  "admin" BOOLEAN DEFAULT 'false',
  "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" TIMESTAMP NULL,
  PRIMARY KEY ("id"));



-- -----------------------------------------------------
-- Table "question"
-- -----------------------------------------------------
DROP TABLE IF EXISTS "question" ;

CREATE TABLE IF NOT EXISTS "question" (
  "question_id" SERIAL NOT NULL,
  "content" VARCHAR(100) NOT NULL,
  "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" TIMESTAMP NULL,
  "user_id" INT NOT NULL,
  "tag_id" INT NOT NULL,
  "score" INT NOT NULL,
  PRIMARY KEY ("question_id"));



-- -----------------------------------------------------
-- Table "answer"
-- -----------------------------------------------------
DROP TABLE IF EXISTS "answer" ;

CREATE TABLE IF NOT EXISTS "answer" (
  "answer_id" SERIAL NOT NULL,
  "content" VARCHAR(1000) NOT NULL,
  "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" TIMESTAMP NULL,
  "question_id" INT NOT NULL,
  "user_id" INT NOT NULL,
  "score" INT NOT NULL,
  PRIMARY KEY ("answer_id"));


-- -----------------------------------------------------
-- Table "tag"
-- -----------------------------------------------------
DROP TABLE IF EXISTS "tag" ;

CREATE TABLE IF NOT EXISTS "tag" (
  "tag_id" SERIAL NOT NULL,
  "name" VARCHAR(60) NOT NULL,
  "status" BOOLEAN NOT NULL,
  "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" TIMESTAMP NULL,
  PRIMARY KEY ("tag_id"));

