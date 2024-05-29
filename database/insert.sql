DROP DATABASE IF EXISTS library;

CREATE DATABASE library;

USE library;

CREATE TABLE
    adherent (
        id INT NOT NULL AUTO_INCREMENT,
        firstname VARCHAR(200) NOT NULL,
        lastname VARCHAR(200) NOT NULL,
        address VARCHAR(200) NOT NULL,
        phone INT NOT NULL,
        email VARCHAR(100) NOT NULL UNIQUE,
        PRIMARY KEY (id)
    );

CREATE TABLE
    category (
        id INT NOT NULL AUTO_INCREMENT,
        type VARCHAR(100) NOT NULL,
        level VARCHAR(100) NOT NULL,
        language VARCHAR(100) NOT NULL,
        address VARCHAR(200),
        PRIMARY KEY (id)
    );

CREATE TABLE
    ouvrage (
        id INT NOT NULL AUTO_INCREMENT,
        name VARCHAR(100) NOT NULL,
        author VARCHAR(100) NOT NULL,
        publication_date DATETIME,
        category_id INT NOT NULL,
        PRIMARY KEY (id),
        FOREIGN KEY (category_id) REFERENCES category (id)
    );

CREATE TABLE
    reservation (
        id INT NOT NULL AUTO_INCREMENT,
        reservation_date DATETIME,
        adherent_id INT,
        ouvrage_id INT,
        PRIMARY KEY (id),
        FOREIGN KEY (adherent_id) REFERENCES adherent (id),
        FOREIGN KEY (ouvrage_id) REFERENCES ouvrage (id)
    );

CREATE TABLE
    lending (
        id INT NOT NULL AUTO_INCREMENT,
        lending_date DATETIME,
        return_date DATETIME,
        adherent_id INT,
        ouvrage_id INT,
        PRIMARY KEY (id),
        FOREIGN KEY (adherent_id) REFERENCES adherent (id),
        FOREIGN KEY (ouvrage_id) REFERENCES ouvrage (id)
    );