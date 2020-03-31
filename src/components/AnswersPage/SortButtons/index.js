// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// import du composant styled du sortbuttons
import SortButtonsStyled from './SortButtonsStyled';

const SortButtons = ({}) => (
// == Composant
// ici on a la fonction qui renvoi le formulaire de structure de sortbuttons
  <SortButtonsStyled>
    <button
      type="button"
      onClick={() => {

      }}
    >
      New
    </button>
    <button
      type="button"
      onClick={() => {
      }}
    >
      Best
    </button>
  </SortButtonsStyled>
);

SortButtons.propTypes = {
};

export default SortButtons;
