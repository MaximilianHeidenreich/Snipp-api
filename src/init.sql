CREATE TABLE snipps (
    ID SERIAL PRIMARY KEY,
    author VARCHAR(255) NOT NULL,
    title VARCHAR(255) NOT NULL
);

INSERT INTO snipps (author, title)
VALUES  ('J.K. Rowling', 'Harry Potter');