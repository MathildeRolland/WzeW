/* eslint-disable indent */
/* eslint-disable linebreak-style */
// == Import npm
import React, { useEffect, useState } from 'react';
import axios from 'axios';

// == Import components
import Header from 'src/components/Header';
import Meteo from 'src/components/Meteo';
import MeteoDetails from 'src/components/MeteoDetails';
import Footer from 'src/components/Footer';

// == Import styles
import './app.scss';

// == Import datas
// import meteoDatas from 'src/datas/meteo';

// == Composant
const App = () => {
  const [weather, setWeather] = useState({});

  const fetchCurrentWeather = (lat, long) => {
    axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=minutely&units=metric&appid=8e505da12139283e541cddb83a9510aa`)
        .then((response) => {
            console.log('response:', response.data);
            const simplifyWeather = {
            city: response.data.timezone,
            temp: response.data.current.temp,
            };
            setWeather(simplifyWeather);
        })
        .catch((error) => {
            console.log('erreur =>', error);
        });
  };

  const findUserLocation = () => {
    if (navigator.geolocation) {
      console.log('Geolocalisation en cours...');
      navigator.geolocation.getCurrentPosition((position) => {
          let { latitude, longitude } = position.coords;
          latitude = (latitude.toFixed(2));
          longitude = (longitude.toFixed(2));
          fetchCurrentWeather(latitude, longitude);
      });
    }
    else {
        console.log('error');
    }
  };

  useEffect(() => {
    findUserLocation();
  }, []);

  return (
    <div className="app">
      <Header />
      <Meteo weather={weather} />
      <MeteoDetails />
      <Footer />
    </div>
  );
};

// == Export
export default App;
