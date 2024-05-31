//import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Pojazdy from './pages/Pojazdy';
import Przeglady from './pages/Przeglady';
import Wyjazdy from './pages/Wyjazdy';
import OProjekcie from './pages/OProjekcie';
import './App.css';

function App() {
  return (
      <Router>
        <div className="App">
          <Navbar />

            <div className="content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/pojazdy" element={<Pojazdy />} />
                    <Route path="/przeglady" element={<Przeglady />} />
                    <Route path="/wyjazdy" element={<Wyjazdy />} />
                    <Route path="/o-projekcie" element={<OProjekcie />} />
                </Routes>
            </div>

            <Footer />
        </div>
      </Router>
  );
}

export default App;
