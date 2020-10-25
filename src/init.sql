CREATE TABLE snipps (
    ID VARCHAR(10) PRIMARY KEY,
    name VARCHAR(15) NOT NULL,
    lang VARCHAR(15) NOT NULL,
    ownerPin VARCHAR(9) NOT NULL,
    content TEXT NOT NULL
);

INSERT INTO snipps (ID, name, lang, ownerPin, content)
VALUES  ('abcDef', 'Test SNipp', 'js', '0000-0000', 'Geklo World');