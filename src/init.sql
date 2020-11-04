CREATE TABLE snipps (
    ID VARCHAR(10) PRIMARY KEY,
    name VARCHAR(20) NOT NULL,
    lang VARCHAR(15) NOT NULL,
    ownerPin VARCHAR(9) NOT NULL,
    content TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

/*INSERT INTO snipps (ID, name, lang, ownerPin, content)
VALUES  ('abcDef', 'Test SNipp', 'js', '0000-0000', 'Geklo World');*/