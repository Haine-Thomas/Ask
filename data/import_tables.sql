- -----------------------------------------------------
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
  "password" VARCHAR(50) NOT NULL,
  "admin" BOOLEAN DEFAULT 0 ,
  "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "avatar" URL NOT NULL,
  PRIMARY KEY ("id"));


-- -----------------------------------------------------
-- Table "question"
-- -----------------------------------------------------
DROP TABLE IF EXISTS "question" ;

CREATE TABLE IF NOT EXISTS "question" (
  "id" SERIAL NOT NULL,
  "subject" VARCHAR(100) NOT NULL,
  "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "user_account_id" INT NOT NULL,
  PRIMARY KEY ("id"));

-- -----------------------------------------------------
-- Table "posts"
-- -----------------------------------------------------
DROP TABLE IF EXISTS "posts" ;

CREATE TABLE IF NOT EXISTS "posts" (
  "id" SERIAL NOT NULL,
  "content" VARCHAR(1000) NOT NULL,
  "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "question_id" INT NOT NULL,
  "user_account_id" INT NOT NULL,
  PRIMARY KEY ("id"));
