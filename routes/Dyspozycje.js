const express = require('express');
const { PrismaClient } = require('@prisma/client');

const router = express.Router();
const prisma = new PrismaClient();

// Pobieranie wszystkich interwencji
router.get('/interwencje', async (req, res) => {
    try {
        const interwencje = await prisma.interwencje.findMany();
        res.json(interwencje);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Wystąpił błąd podczas pobierania interwencji.' });
    }
});

// Pobieranie interwencji po ID wraz z powiązanymi pojazdami
router.get('/interwencje/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const interwencja = await prisma.interwencje.findUnique({
            where: { id: Number(id) },
            include: {
                dyspozycje: {
                    include: {
                        pojazdy: true,
                    },
                },
            },
        });
        if (!interwencja) {
            return res.status(404).json({ error: 'Interwencja nie znaleziona.' });
        }
        res.json(interwencja);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Wystąpił błąd podczas pobierania interwencji.' });
    }
});

// Dodawanie nowej interwencji
router.post('/interwencje', async (req, res) => {
    const { data_wyjazdu, data_powrotu, typ, opis, adres, odleglosc } = req.body;
    try {
        const newInterwencja = await prisma.interwencje.create({
            data: {
                data_wyjazdu,
                data_powrotu,
                typ,
                opis,
                adres,
                odleglosc,
            },
        });
        res.status(201).json(newInterwencja);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Wystąpił błąd podczas dodawania interwencji.' });
    }
});

// Aktualizacja interwencji
router.put('/interwencje/:id', async (req, res) => {
    const { id } = req.params;
    const { data_wyjazdu, data_powrotu, typ, opis, adres, odleglosc } = req.body;
    try {
        const updatedInterwencja = await prisma.interwencje.update({
            where: { id: Number(id) },
            data: {
                data_wyjazdu,
                data_powrotu,
                typ,
                opis,
                adres,
                odleglosc,
            },
        });
        res.json(updatedInterwencja);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Wystąpił błąd podczas aktualizacji interwencji.' });
    }
});

// Usuwanie interwencji
router.delete('/interwencje/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await prisma.interwencje.delete({ where: { id: Number(id) } });
        res.status(204).end();
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Wystąpił błąd podczas usuwania interwencji.' });
    }
});

// Pobieranie wszystkich dyspozycji
router.get('/dyspozycje', async (req, res) => {
    try {
        const dyspozycje = await prisma.dyspozycje.findMany();
        res.json(dyspozycje);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Wystąpił błąd podczas pobierania dyspozycji.' });
    }
});

// Pobieranie dyspozycji po ID
router.get('/dyspozycje/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const dyspozycja = await prisma.dyspozycje.findUnique({ where: { id: Number(id) }, include: {pojazdy: true, interwencje: true}  });
        if (!dyspozycja) {
            return res.status(404).json({ error: 'Dyspozycja nie znaleziona.' });
        }
        res.json(dyspozycja);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Wystąpił błąd podczas pobierania dyspozycji.' });
    }
});

// Dodawanie nowej dyspozycji
router.post('/dyspozycje', async (req, res) => {
    const { interwencja_id, pojazd_id } = req.body;
    try {
        const newDyspozycja = await prisma.dyspozycje.create({
            data: {
                interwencja_id,
                pojazd_id,
            },
        });
        res.status(201).json(newDyspozycja);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Wystąpił błąd podczas dodawania dyspozycji.' });
    }
});

// Aktualizacja dyspozycji
router.put('/dyspozycje/:id', async (req, res) => {
    const { id } = req.params;
    const { interwencja_id, pojazd_id } = req.body;
    try {
        const updatedDyspozycja = await prisma.dyspozycje.update({
            where: { id: Number(id) },
            data: {
                interwencja_id,
                pojazd_id,
            },
        });
        res.json(updatedDyspozycja);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Wystąpił błąd podczas aktualizacji dyspozycji.' });
    }
});

// Usuwanie dyspozycji
router.delete('/dyspozycje/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await prisma.dyspozycje.delete({ where: { id: Number(id) }});
        res.status(204).end();
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Wystąpił błąd podczas usuwania dyspozycji.' });
    }
});

module.exports = router;
