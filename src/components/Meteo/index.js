/* eslint-disable linebreak-style */
import React from 'react';
import PropTypes from 'prop-types';

import meteoSvg from './meteo.svg';
import './meteo.scss';

const Meteo = ({ meteoDatas }) => (
  <div className="meteo">
    <p className="meteo__city">{meteoDatas.name}</p>
    <p className="meteo__temperature">{Math.round(meteoDatas.main.temp)}°</p>
    <img src={meteoSvg} alt="Logo of the today's meteo" className="meteo__image" />
  </div>
);

Meteo.propTypes = {
  meteoDatas: PropTypes.array.isRequired,
};

export default Meteo;
