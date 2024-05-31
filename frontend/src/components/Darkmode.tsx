import React, { useState } from 'react';

// Definiowanie typu dla motywu
type Theme = 'light' | 'dark';

// Komponent przycisku do zmiany motywu
const ThemeToggleButton: React.FC = () => {
    const [theme, setTheme] = useState<Theme>('light');

    // Funkcja do zmiany motywu
    const toggleTheme = () => {
        setTheme((prevTheme) => prevTheme === 'light' ? 'dark' : 'light');
    };

    // Ustawienie klasy CSS dla motywu
    document.body.className = theme;

    return (
        <button onClick={toggleTheme}>
            Zmień na {theme === 'light' ? 'ciemny' : 'jasny'} motyw
        </button>
    );
};

export default ThemeToggleButton;
