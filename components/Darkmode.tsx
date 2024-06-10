import React, { useState } from 'react';

const ThemeSwitcher: React.FC = () => {
    const [darkTheme, setDarkTheme] = useState(false);

    const toggleTheme = () => {
        setDarkTheme(!darkTheme);
    };

    return (
        <div style={{
            backgroundColor: darkTheme ? '#333' : '#FFF',
            color: darkTheme ? '#FFF' : '#333',
            transition: 'all 0.3s ease'
        }}>
            <button onClick={toggleTheme}>
                {darkTheme ? 'Jasny motyw' : 'Ciemny motyw'}
            </button>
            {/* Reszta twojej aplikacji */}
        </div>
    );
};

export default ThemeSwitcher;
