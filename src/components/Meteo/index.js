/* eslint-disable linebreak-style */
import React from 'react';
import PropTypes from 'prop-types';

import './meteo.scss';

const Meteo = ({ weather, city }) => (
  <div className="meteo">
    <p className="meteo__city">{city}</p>
    <p className="meteo__time">{weather.currentTime}</p>
    <p className="meteo__temperature">{Math.round(weather.temp)}°</p>
    <img src={weather.icon} alt="Logo of the today's meteo" className="meteo__image" />
  </div>
);

Meteo.propTypes = {
  weather: PropTypes.object.isRequired,
  city: PropTypes.string.isRequired,
};

export default Meteo;
