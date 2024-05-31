//import React from 'react';
import { BrowserRouter as Router, /*Route, Switch*/ } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
// import Home from './pages/Home';
// import Pojazdy from './pages/Pojazdy';
// import Przeglady from './pages/Przeglady';
// import Wyjazdy from './pages/Wyjazdy';
// import OProjekcie from 'pages/OProjekcie';
import './App.css';

function App() {
  return (
      <Router>
        <div className="App">
          <Navbar />
            <div className="content">
                {/*<Switch>*/}
                {/*  <Route exact path="/" component={Home} />*/}
                {/*  <Route path="/pojazdy" component={Pojazdy} />*/}
                {/*  <Route path="/przeglady" component={Przeglady} />*/}
                {/*  <Route path="/wyjazdy" component={Wyjazdy} />*/}
                {/*  <Route path="/o-projekcie" component={OProjekcie} />*/}
                {/*</Switch>*/}
            </div>

            <Footer />
        </div>
      </Router>
  );
}

export default App;
