/* eslint-disable linebreak-style */
/* eslint-disable indent */
// == Import npm
import React, { useEffect, useState } from 'react';
import axios from 'axios';

// == Import components
import Header from 'src/components/Header';
import Meteo from 'src/components/Meteo';
import HourlyMeteo from 'src/components/HourlyMeteo';
import Footer from 'src/components/Footer';

import { convertDatetimeToHour, getNextTwelveHoursWeathers } from '../../selectors';

// == Import styles
import './app.scss';

// == Import datas
// import meteoDatas from 'src/datas/meteo';

// == Composant
const App = () => {
  // == State
  const [weather, setWeather] = useState({});
  const [weatherByHour, setWeatherByHour] = useState([]);
  const [city, setCity] = useState('Lyon');

  // == Functions
  const getCityFromCoords = (lat, long) => {
    const options = {
      params: { location: `${lat},${long}`, language: 'en' },
      headers: {
        'x-rapidapi-key': '2b0038fd0bmsh5b7e09aa3a67bcdp19ebffjsnfa99f3065251',
        'x-rapidapi-host': 'trueway-geocoding.p.rapidapi.com',
      },
    };

    axios.get('https://trueway-geocoding.p.rapidapi.com/ReverseGeocode', options)
      .then((response) => {
        const currentCity = response.data.results[0].locality;
        setCity(currentCity);
      })
      .catch((error) => console.log(error));
  };

  const fetchCurrentWeather = (lat, long) => {
    axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=minutely&units=metric&appid=8e505da12139283e541cddb83a9510aa`)
        .then((response) => {
          // console.log(response.data);
          // Find the current City with the location coords
          getCityFromCoords(lat, long);

          // Object with the weather informations I'll use
          const simplifyWeather = {
            currentTime: convertDatetimeToHour(response.data.current.dt),
            temp: response.data.current.temp,
            icon: `http://openweathermap.org/img/w/${response.data.current.weather[0].icon}.png`,
          };

          // Modify state
          setWeather(simplifyWeather);
          const hourlyWeather = getNextTwelveHoursWeathers(response.data.hourly);
          setWeatherByHour(hourlyWeather);
        })
        .catch((error) => {
            console.log('erreur =>', error);
        });
  };

  const findUserLocation = () => {
    if (navigator.geolocation) {
      // console.log('Geolocalisation en cours...');
      navigator.geolocation.getCurrentPosition((position) => {
          let { latitude, longitude } = position.coords;
          latitude = (latitude.toFixed(2));
          longitude = (longitude.toFixed(2));

          // Get weather informations from API
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
      <Meteo weather={weather} city={city} />
      <HourlyMeteo weatherByHour={weatherByHour} />
      <Footer />
    </div>
  );
};

// == Export
export default App;
