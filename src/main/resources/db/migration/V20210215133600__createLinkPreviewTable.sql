CREATE TABLE link_preview
(
    id           INT NOT NULL AUTO_INCREMENT,
    domain       TEXT,
    url          TEXT,
    title        TEXT,
    description  TEXT,
    image        TEXT,
    image_alt     TEXT,
    PRIMARY KEY (id)
);
