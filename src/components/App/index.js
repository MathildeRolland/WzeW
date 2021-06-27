/* eslint-disable linebreak-style */
// == Import npm
import React from 'react';

// == Import components
import Header from 'src/components/Header';
import Meteo from 'src/components/Meteo';
import MeteoDetails from 'src/components/MeteoDetails';
import Footer from 'src/components/Footer';

// == Import styles
import './app.scss';

// == Import datas
import meteoDatas from 'src/datas/meteo';

// == Composant
const App = () => (
  <div className="app">
    <Header />
    <Meteo meteoDatas={meteoDatas} />
    <MeteoDetails />
    <Footer />
  </div>
);

// == Export
export default App;
