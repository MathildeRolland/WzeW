import React from 'react';

import meteoSvg from './meteo.svg';
import waterDrop from './water-drop.svg';
import './meteo-details.scss';

const MeteoDetails = () => (
  <div className="meteo-details">
    <div className="meteo-details__time">
      <p className="meteo-details__hour">07:00</p>
      <p className="meteo-details__temperature">25°</p>
      <img src={meteoSvg} alt="Logo de la meteo" className="meteo-details__image" />
      <div className="humidity">
        <img src={waterDrop} alt="water drop svg" className="humidity__image" />
        <p className="humidity__percentage">10%</p>
      </div>
    </div>
    <div className="meteo-details__time">
      <p className="meteo-details__hour">07:00</p>
      <p className="meteo-details__temperature">25°</p>
      <img src={meteoSvg} alt="Logo de la meteo" className="meteo-details__image" />
      <div className="humidity">
        <img src={waterDrop} alt="water drop svg" className="humidity__image" />
        <p className="humidity__percentage">10%</p>
      </div>
    </div>
    <div className="meteo-details__time">
      <p className="meteo-details__hour">07:00</p>
      <p className="meteo-details__temperature">25°</p>
      <img src={meteoSvg} alt="Logo de la meteo" className="meteo-details__image" />
      <div className="humidity">
        <img src={waterDrop} alt="water drop svg" className="humidity__image" />
        <p className="humidity__percentage">10%</p>
      </div>
    </div>
    <div className="meteo-details__time">
      <p className="meteo-details__hour">07:00</p>
      <p className="meteo-details__temperature">25°</p>
      <img src={meteoSvg} alt="Logo de la meteo" className="meteo-details__image" />
      <div className="humidity">
        <img src={waterDrop} alt="water drop svg" className="humidity__image" />
        <p className="humidity__percentage">10%</p>
      </div>
    </div>
  </div>
);

export default MeteoDetails;