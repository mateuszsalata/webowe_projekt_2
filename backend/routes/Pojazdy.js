const express = require('express');
const { PrismaClient } = require('@prisma/client');

const router = express.Router();
const prisma = new PrismaClient();

// Pobieranie wszystkich pojazdów
router.get('/', async (req, res) => {
    try {
        const pojazdy = await prisma.pojazdy.findMany();
        res.json(pojazdy);
    } catch (error) {
        res.status(500).json({ error: 'Wystąpił błąd podczas pobierania pojazdów.' });
    }
});

// Pobieranie pojazdu po ID
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const pojazd = await prisma.pojazdy.findUnique({ where: { id: Number(id) } });
        if (!pojazd) {
            return res.status(404).json({ error: 'Pojazd nie znaleziony.' });
        }
        res.json(pojazd);
    } catch (error) {
        res.status(500).json({ error: 'Wystąpił błąd podczas pobierania pojazdu.' });
    }
});

// Dodawanie nowego pojazdu
router.post('/', async (req, res) => {
    const { numer_rejestracyjny, numer_operacyjny, marka, model, rok_produkcji, przebieg, przeznaczenie, obraz } = req.body;
    try {
        const newPojazd = await prisma.pojazdy.create({
            data: {
                numer_rejestracyjny,
                numer_operacyjny,
                marka,
                model,
                rok_produkcji,
                przebieg,
                przeznaczenie,
                obraz,
            },
        });
        res.status(201).json(newPojazd);
    } catch (error) {
        res.status(500).json({ error: 'Wystąpił błąd podczas dodawania pojazdu.' });
    }
});

// Aktualizacja pojazdu
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { numer_rejestracyjny, numer_operacyjny, marka, model, rok_produkcji, przebieg, przeznaczenie, obraz } = req.body;
    try {
        const updatedPojazd = await prisma.pojazdy.update({
            where: { id: Number(id) },
            data: {
                numer_rejestracyjny,
                numer_operacyjny,
                marka,
                model,
                rok_produkcji,
                przebieg,
                przeznaczenie,
                obraz,
            },
        });
        res.json(updatedPojazd);
    } catch (error) {
        res.status(500).json({ error: 'Wystąpił błąd podczas aktualizacji pojazdu.' });
    }
});

// Usuwanie pojazdu
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await prisma.pojazdy.delete({ where: { id: Number(id) } });
        res.status(204).end();
    } catch (error) {
        res.status(500).json({ error: 'Wystąpił błąd podczas usuwania pojazdu.' });
    }
});

module.exports = router;
