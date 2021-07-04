/* eslint-disable linebreak-style */
import React from 'react';
import PropTypes from 'prop-types';

import meteoSvg from './meteo.svg';
import './meteo.scss';

const Meteo = ({ weather }) => {
  console.log(weather);
  return (
    <div className="meteo">
      <p className="meteo__city">{weather.city}</p>
      <p className="meteo__temperature">{weather.temp}°</p>
      <img src={meteoSvg} alt="Logo of the today's meteo" className="meteo__image" />
    </div>
  );
};

Meteo.propTypes = {

};

export default Meteo;
