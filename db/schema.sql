DROP DATABASE IF EXISTS samplekitmanager_db;
CREATE DATABASE samplekitmanager_db;

USE samplekitmanager_db;

CREATE TABLE reps(
  id INT NOT NULL AUTO_INCREMENT,
  rep_name VARCHAR(45) NOT NULL,
  rep_number INT(8) NOT NULL,
  rep_phone VARCHAR(12) NOT NULL,
  rep_email VARCHAR(50) NOT NULL,
  last_activity DATETIME,
  rep_inactive BOOLEAN NOT NULL DEFAULT 0,
  rep_chargeback BOOLEAN NOT NULL DEFAULT 0,
  PRIMARY KEY (id)
);

CREATE TABLE notes(
    id INT NOT NULL AUTO_INCREMENT,
    rep_number INT(8) NOT NULL,
    note VARCHAR(250) NOT NULL
)