import React from 'react';

import meteoSvg from './meteo.svg';
import './meteo.scss';

const Meteo = () => (
  <div className="meteo">
    <p className="meteo__city">Lyon</p>
    <p className="meteo__temperature">25°</p>
    <img src={meteoSvg} alt="Logo of the today's meteo" className="meteo__image" />
  </div>
);

export default Meteo;