-- Tabela Pojazdy
CREATE TABLE Pojazdy (
    id INT AUTO_INCREMENT PRIMARY KEY,
    numer_rejestracyjny VARCHAR(50) NOT NULL,
    numer_operacyjny VARCHAR(8),
    marka VARCHAR(50) NOT NULL,
    model VARCHAR(50) NOT NULL,
    rok_produkcji YEAR NOT NULL,
    przebieg INT NOT NULL,
    przeznaczenie VARCHAR(10) NOT NULL,
    obraz VARCHAR(255)
);

-- Tabela Przeglądy
CREATE TABLE Przeglady (
    id INT AUTO_INCREMENT PRIMARY KEY,
    pojazd_id INT NOT NULL,
    data DATE NOT NULL,
    typ VARCHAR(50) NOT NULL,
    wynik VARCHAR(50) NOT NULL,
    FOREIGN KEY (pojazd_id) REFERENCES Pojazdy(id)
);

-- Tabela Naprawy
CREATE TABLE Naprawy (
    id INT AUTO_INCREMENT PRIMARY KEY,
    pojazd_id INT NOT NULL,
    data DATE NOT NULL,
    opis TEXT NOT NULL,
    koszt DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (pojazd_id) REFERENCES Pojazdy(id)
);

-- Tabela Interwencje
CREATE TABLE Interwencje (
    id INT AUTO_INCREMENT PRIMARY KEY,
    data_wyjazdu DATETIME NOT NULL,
    data_powrotu DATETIME NOT NULL,
    typ VARCHAR(50) NOT NULL,
    opis TEXT NOT NULL,
    adres VARCHAR(255),
    odleglosc DECIMAL(10,2)
);

-- Tabela Dyspozycje
CREATE TABLE Dyspozycje (
    id INT AUTO_INCREMENT PRIMARY KEY,
    interwencja_id INT NOT NULL,
    pojazd_id INT NOT NULL,
    FOREIGN KEY (interwencja_id) REFERENCES Interwencje(id),
    FOREIGN KEY (pojazd_id) REFERENCES Pojazdy(id)
);


-- Tworzenie tabeli Wyposazenie
CREATE TABLE Wyposazenie (
    id INT AUTO_INCREMENT PRIMARY KEY,
    pojazd_id INT NOT NULL,
    nazwa VARCHAR(100) NOT NULL,
    stan VARCHAR(50) NOT NULL,
    data_ostatniego_przegladu DATE,
    waznosc_przegladu INT,
    FOREIGN KEY (pojazd_id) REFERENCES Pojazdy(id)
);

-- Przykładowe dane
-- Wstawienie danych do tabeli Pojazdy
INSERT INTO Pojazdy (numer_rejestracyjny, numer_operacyjny, marka, model, rok_produkcji, przebieg, przeznaczenie, obraz) VALUES
('PSE10856', '609[P]41', 'MAN', 'TGM 13.290', 2012, 25012, 'GBA 2,5/25.5', 'public/images/obrazu1.jpg'),
('PSE85KY', '609[P]42', 'Ford', 'Transit', 2007, 29516, 'SLRt', 'public/images/DSC_0984.jpg'),
('PSE32CW', '609[P]43', 'Jelcz', '420', 1981, 14672, 'SD-30', 'public/images/obrazu2.jpg');


INSERT INTO Przeglady (pojazd_id, data, typ, wynik) VALUES
(1, '2023-06-15', 'Okresowy', 'Negatywny'),
(2, '2023-07-20', 'Okresowy', 'Pozytywny'),
(1, '2023-08-01', 'Okresowy', 'Pozytywny'),
(3, '2023-08-07', 'Okresowy', 'Negatywny');

INSERT INTO Naprawy (pojazd_id, data, opis, koszt) VALUES
(1, '2023-06-10', 'Wymiana tarcz hamulcowych', 250.00),
(2, '2023-07-05', 'Naprawa skrzyni biegów', 1500.00),
(1, '2023-08-03', 'Wymiana oleju', 80.00),
(3, '2023-09-10', 'Naprawa układu kierowniczego', 350.00);

INSERT INTO Interwencje (data_wyjazdu, data_powrotu, typ, opis, adres, odleglosc) VALUES
('2024-05-01 08:00:00', '2024-05-01 10:30:00', 'Pożar', 'Pożar w budynku mieszkalnym', 'ul. Długa 123, Chromiec', 10.5),
('2024-05-02 12:15:00', '2024-05-02 13:30:00', 'Wypadek drogowy', 'Zderzenie dwóch pojazdów', 'ul. Słoneczna 45, Radoszkowo', 15.2),
('2024-05-03 18:30:00', '2024-05-03 21:00:00', 'Zabezpieczenie imprezy', 'Absolutorium na stadionie miejskim', 'Hala sportowa, Plac Sportowy 1, Książ Wielkopolski', 1.7),
('2024-05-04 09:45:00', '2024-05-04 11:00:00', 'Inne miejscowe zagrożenie', 'Wyciąganie kotka z drzewa', 'ul. Leśna 10, Książ Wielkopolski', 3.5),
('2024-05-05 16:20:00', '2024-05-05 17:45:00', 'Pożar', 'Pożar traw na polu uprawnym', 'ul. Polna 7, Kiełczynek', 20.0);


INSERT INTO Dyspozycje (interwencja_id, pojazd_id) VALUES
(1, 1),
(1, 2),
(1, 3),
(2, 2),
(3, 1),
(4, 3),
(5, 1);

INSERT INTO Wyposazenie (pojazd_id, nazwa, stan, data_ostatniego_przegladu, waznosc_przegladu) VALUES
(1, 'Gaśnica', 'Sprawny', '2023-05-01', 365),
(1, 'Wąż strażacki', 'Sprawny', '2023-03-15', 180),
(1, 'Topór gaśniczy', 'Sprawny', '2023-03-15', 180),
(1, 'Pilot od stacji radiowej', 'Uszkodzony', '2023-05-01', 365),
(1, 'Śruby i nakrętki', 'Sprawne', '2023-03-15', 180),
(1, 'Środek gaśniczy', 'Niedopuszczalny', '2023-02-28', 150),
(2, 'Apteczka', 'Sprawna', '2023-06-20', 90),
(2, 'Nosze', 'Sprawne', '2023-04-10', 120),
(2, 'Zestaw naprawczy opon', 'Sprawny', '2023-06-20', 90),
(2, 'Radiotelefon', 'Sprawny', '2023-04-10', 120),
(2, 'Klucze nasadowe', 'Brakujące', '2023-06-20', 90),
(2, 'Płyn do chłodnic', 'Niewystarczający', '2023-01-20', 270),
(3, 'Latarka', 'Uszkodzona', '2023-01-20', 270),
(3, 'Koc ratunkowy', 'Sprawny', '2023-02-28', 150),
(3, 'Kamizelka odblaskowa', 'Sprawna', '2023-02-28', 150),
(3, 'Łopata', 'Uszkodzona', '2023-04-10', 120),
(3, 'Flara', 'Brakująca', '2023-03-15', 180);
