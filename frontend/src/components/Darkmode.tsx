import React, { useState } from 'react';

type Theme = 'light' | 'dark';

const ThemeToggleButton: React.FC = () => {
    const [theme, setTheme] = useState<Theme>('light');

    const toggleTheme = () => {
        setTheme((prevTheme) => prevTheme === 'light' ? 'dark' : 'light');
    };

    document.body.className = theme;

    return (
        <button onClick={toggleTheme}>
            Zmień na {theme === 'light' ? 'ciemny' : 'jasny'} motyw
        </button>
    );
};

export default ThemeToggleButton;
