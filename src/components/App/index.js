/* eslint-disable react/jsx-indent */
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
import Loading from 'src/components/Loading';
import ConfirmBox from 'src/components/ConfirmBox';

import { convertDatetimeToHour, getNextTwelveHoursWeathers } from '../../selectors';

// == Import styles
import './app.scss';

// == Composant
const App = () => {
  // == State
  const [weather, setWeather] = useState({});
  const [weatherByHour, setWeatherByHour] = useState([]);
  const [city, setCity] = useState('');
  const [isLocated, setIsLocated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [hasRefused, setHasRefused] = useState(false);
  const [apiRespond, setApiRespond] = useState(true);

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
          console.log(response.data);
          // Find the current City with the location coords
          getCityFromCoords(lat, long);

          // Object with the weather informations I'll use
          const simplifyWeather = {
            currentTime: convertDatetimeToHour(response.data.current.dt),
            temp: response.data.current.temp,
            icon: `https://openweathermap.org/img/w/${response.data.current.weather[0].icon}.png`,
          };

          // Modify state
          setWeather(simplifyWeather);
          const hourlyWeather = getNextTwelveHoursWeathers(response.data.hourly);
          setWeatherByHour(hourlyWeather);
          setApiRespond(true);
          setLoading(false);
        })
        .catch(() => {
            setApiRespond(false);
            console.log('erreur');
            setLoading(false);
        });
  };

  const userLocationSuccess = (position) => {
    let { latitude, longitude } = position.coords;
    latitude = (latitude.toFixed(2));
    longitude = (longitude.toFixed(2));

    // Get weather informations from API
    fetchCurrentWeather(latitude, longitude);
  };

  const userLocationFail = (error) => {
    document.textContent = `Désolé, une erreur est survenue: ${error}`;
  };

  const locationOptions = {
    maximumAge: 0,
    timeout: 5000,
    enableHighAccuracy: true,
  };

  const navLocation = navigator.geolocation;

  const findUserLocation = () => {
    if (navLocation) {
      // console.log('Geolocalisation en cours...');
      navigator.geolocation.getCurrentPosition(
        userLocationSuccess,
        userLocationFail,
        locationOptions,
      );
    }
    else {
        console.log('error');
        setApiRespond(false);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      findUserLocation();
    }, 500);
  }, []);

  const handleConfirmation = () => {
    setIsLocated(true);
  };

  const handleRefuse = () => {
    setHasRefused(true);
  };

  return (
    <div className="app">
      <Header />
        {!isLocated
          && (
            <ConfirmBox
              handleConfirmation={handleConfirmation}
              handleRefuse={handleRefuse}
              hasRefused={hasRefused}
            />
          )}
        {isLocated
          && (
            loading && <Loading />,
            !loading && (
              apiRespond ? (
                <>
                  <Meteo weather={weather} city={city} />
                  <HourlyMeteo weatherByHour={weatherByHour} />
                </>
              )
              : <p className="app__fail-request">Désolé, la requête n'a pas abouti, veuillez réessayer plus tard...</p>
            )
        )}
      <Footer />
    </div>
  );
};

// == Export
export default App;
