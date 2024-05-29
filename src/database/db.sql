USE library;
-- Insert data into adherent table
INSERT INTO adherent (firstname, lastname, address, phone, email) VALUES
('Alice', 'Dupont', '123 Rue de la Paix, Paris', 123456789, 'alice.dupont@example.com'),
('Bob', 'Martin', '456 Avenue des Champs, Lyon', 987654321, 'bob.martin@example.com'),
('Charlie', 'Durand', '789 Boulevard Saint-Michel, Marseille', 555123456, 'charlie.durand@example.com'),
('Diane', 'Bernard', '101 Rue du Faubourg, Toulouse', 444987123, 'diane.bernard@example.com'),
('Eve', 'Lemoine', '202 Place de la Victoire, Bordeaux', 333789654, 'eve.lemoine@example.com');
-- Insert data into category table
INSERT INTO category (type, level, language, address) VALUES
('Livre', 'Facile', 'Français', 'Section A'),
('Livre', 'Avancé', 'Anglais', 'Section B'),
('Revue', 'Intermédiaire', 'Français', 'Section C'),
('DVD', 'Débutant', 'Italien', 'Section D'),
('Livre', 'Expert', 'Anglais', 'Section E'),
('Revue', 'Facile', 'Français', 'Section F'),
('DVD', 'Intermédiaire', 'Espagnol', 'Section G'),
('Livre', 'Avancé', 'Allemand', 'Section H'),
('Revue', 'Débutant', 'Italien', 'Section I'),
('DVD', 'Expert', 'Français', 'Section J');
-- Insert data into ouvrage table
INSERT INTO ouvrage (name, author, publication_date, category_id) VALUES
('Le Petit Prince', 'Antoine de Saint-Exupéry', '2024-05-01 10:00:00', 1),  -- Livre, Facile, Français
('A Brief History of Time', 'Stephen Hawking', '2024-04-20 14:30:00', 2),  -- Livre, Avancé, Anglais
('National Geographic', 'Multiple Authors', '2024-03-10 09:00:00', 3),  -- Revue, Intermédiaire, Français
('La Dolce Vita', 'Federico Fellini', '2024-02-01 12:00:00', 4),  -- DVD, Débutant, Italien
('Artificial Intelligence', 'John McCarthy', '2024-01-15 11:00:00', 5),  -- Livre, Expert, Anglais
('Science et Vie', 'Multiple Authors', '2024-01-10 13:00:00', 6),  -- Revue, Facile, Français
('El Laberinto del Fauno', 'Guillermo del Toro', '2024-03-20 17:00:00', 7),  -- DVD, Intermédiaire, Espagnol
('Der Spiegel', 'Multiple Authors', '2024-04-25 16:00:00', 8),  -- Livre, Avancé, Allemand
("L'arte Italiana", 'Various', '2024-05-05 10:00:00', 9),  -- Revue, Débutant, Italien
('César et Rosalie', 'Claude Sautet', '2024-06-10 14:00:00', 10);  -- DVD, Expert, Français
-- Insert data into reservation table
INSERT INTO reservation (reservation_date, adherent_id, ouvrage_id) VALUES
('2024-05-20 15:00:00', 1, 2),
('2024-05-25 10:00:00', 2, 3),
('2024-05-30 09:00:00', 3, 4),
('2024-06-01 11:00:00', 4, 5),
('2024-06-05 14:00:00', 5, 1),
('2024-06-10 10:00:00', 1, 6),
('2024-06-15 12:00:00', 2, 7),
('2024-06-20 09:30:00', 3, 8),
('2024-06-25 14:30:00', 4, 9),
('2024-06-30 16:00:00', 5, 10);
-- Insert data into lending table
INSERT INTO lending (lending_date, return_date, adherent_id, ouvrage_id) VALUES
('2024-05-01 10:00:00', '2024-05-15 10:00:00', 1, 1),
('2024-04-20 14:30:00', '2024-05-20 14:30:00', 2, 2),
('2024-03-10 09:00:00', '2024-04-10 09:00:00', 3, 3),
('2024-02-01 12:00:00', '2024-03-01 12:00:00', 4, 4),
('2024-01-15 11:00:00', '2024-02-15 11:00:00', 5, 5),
('2024-01-10 13:00:00', '2024-02-10 13:00:00', 1, 6),
('2024-03-20 17:00:00', '2024-04-20 17:00:00', 2, 7),
('2024-04-25 16:00:00', '2024-05-25 16:00:00', 3, 8),
('2024-05-05 10:00:00', '2024-06-05 10:00:00', 4, 9),
('2024-06-10 14:00:00', '2024-07-10 14:00:00', 5, 10);