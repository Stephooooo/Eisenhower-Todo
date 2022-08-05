CREATE DATABASE eisenhowertodo;

CREATE TABLE users (
	user_id SERIAL PRIMARY KEY,
	username VARCHAR ( 50 ) UNIQUE NULL,
    fullName VARCHAR (100) NOT NULL,
	email VARCHAR ( 250 ) UNIQUE NOT NULL,
	passwords VARCHAR ( 250 ) NOT NULL,
    passwordResetToken VARCHAR (250) NOT NULL,
    createdAt TIMESTAMP NOT NULL,
    active BOOLEAN   
);
CREATE TYPE taskUrgency AS ENUM ( 'Urgent', 'Not Urgent');
CREATE TYPE taskImportance AS ENUM ('Important', 'Not Important');
CREATE TABLE task (
	task_id SERIAL PRIMARY KEY,
	user_id INTEGER,
    taskName VARCHAR (250),
	taskStatus BOOLEAN,
	taskDate DATETIME,
    FOREIGN KEY (user_id)  
);