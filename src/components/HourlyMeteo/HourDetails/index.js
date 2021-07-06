/* eslint-disable react/jsx-indent */
/* eslint-disable linebreak-style */
/* eslint-disable indent */
import React from 'react';
import PropTypes from 'prop-types';

import waterDrop from './water-drop.svg';

const HourDetails = ({ temp, time, icon, humidity }) => (
    <div className="hourly-meteo__time">
        <p className="hourly-meteo__hour">{time}</p>
        <p className="hourly-meteo__temperature">{Math.round(temp)}°</p>
        <img src={icon} alt="Logo de la meteo" className="hourly-meteo__image" />
        <div className="humidity">
            <img src={waterDrop} alt="water drop svg" className="humidity__image" />
            <p className="humidity__percentage">{humidity}%</p>
        </div>
    </div>
);

HourDetails.propTypes = {
    temp: PropTypes.number.isRequired,
    time: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    humidity: PropTypes.number.isRequired,
};

export default HourDetails;
