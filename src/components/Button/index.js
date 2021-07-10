/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable react/jsx-indent */
import React from 'react';
import PropTypes from 'prop-types';

import './button.scss';

const Button = ({ buttonText, handleClick }) => {
    // Manage the class names
    const className = buttonText === 'Je confirme' ? 'button button_confirm' : 'button';

    return (
        <button className={className} type="button" onClick={handleClick}>{buttonText}</button>
    );
};

Button.propTypes = {
    buttonText: PropTypes.string.isRequired,
    handleClick: PropTypes.func.isRequired,
};

export default Button;
