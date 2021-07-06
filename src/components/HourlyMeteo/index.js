/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-curly-newline */
/* eslint-disable linebreak-style */
import React from 'react';
import PropTypes from 'prop-types';

import HourDetails from './HourDetails';

import './hourly-meteo.scss';

const HourlyMeteo = ({ weatherByHour }) => (
    <div className="hourly-meteo">
      {
        weatherByHour.map(
          (hour) => <HourDetails key={hour.id} {...hour} />,
        )
      }
    </div>
);

HourlyMeteo.propTypes = {
  weatherByHour: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default HourlyMeteo;
