CREATE DATABASE ToDoApp;

CREATE Table todo(
    todo_id SERIAL PRIMARY KEY,
    description VARCHAR(255)
);