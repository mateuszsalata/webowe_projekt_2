// Navbar.tsx
import RootApp from './Darkmode';
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar: React.FC = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Strona główna</Link>
                </li>
                <li>
                    <Link to="/pojazdy">Pojazdy i wyposażenie</Link>
                </li>
                <li>
                    <Link to="/przeglady">Przeglądy i naprawy</Link>
                </li>
                <li>
                    <Link to="/wyjazdy">Interwencje i dyspozycje</Link>
                </li>
                <li>
                    <Link to="/o-projekcie">O projekcie</Link>
                </li>
            </ul>
            <RootApp />
        </nav>
    );
};

export default Navbar;
