/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-indent */
import React from 'react';
import PropTypes from 'prop-types';

import Button from 'src/components/Button';

import './confirm-box.scss';

const ConfirmBox = ({ handleConfirmation, handleRefuse, hasRefused }) => (
    <div className="confirm-box">
      {!hasRefused && (
        <>
          <p className="confirm-box__question">Acceptez-vous de nous donner accès à votre position actuelle?</p>
          <p className="confirm-box__modality">*Cette donnée ne sera ni enregistrée ni utilisée</p>
          <div className="confirm-box__buttons">
              <Button buttonText="Je confirme" handleClick={handleConfirmation} />
              <Button buttonText="NON!" handleClick={handleRefuse} />
          </div>
        </>
      )}
      {
        hasRefused && <p className="confirm-box__refuse">Pas de problème, à la prochaine!</p>
      }
    </div>
);

ConfirmBox.propTypes = {
  handleConfirmation: PropTypes.func.isRequired,
  handleRefuse: PropTypes.func.isRequired,
  hasRefused: PropTypes.bool.isRequired,
};

export default ConfirmBox;
