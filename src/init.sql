CREATE TABLE snipps (
    id uuid PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    lang VARCHAR(255) NOT NULL,
    ownerPin VARCHAR(255) NOT NULL,
    content VARCHAR(255) NOT NULL
);

INSERT INTO snipps (ID, name, lang, ownerPin, content)
VALUES  ('c7f41315-bc8f-4918-8251-23db7db0ddc4', 'Test SNipp', 'js', '000-000', 'Geklo World');