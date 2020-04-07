// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// import du composant styled du sortbuttons
import SortButtonsStyled from './SortButtonsStyled';

const SortButtons = ({ changeSort, sorted }) => (
// == Composant
// ici on a la fonction qui renvoi le formulaire de structure de sortbuttons
  <SortButtonsStyled>
    <button
      type="button"
      className={sorted === 'new' ? 'active-btn' : ''}
      onClick={() => {
        changeSort('new');
      }}
    >
      New
    </button>
    <button
      type="button"
      className={sorted === 'best' ? 'active-btn' : ''}
      onClick={() => {
        changeSort('best');
      }}
    >
      Best
    </button>
  </SortButtonsStyled>
);

SortButtons.propTypes = {
  changeSort: PropTypes.func.isRequired,
  sorted: PropTypes.string.isRequired,
};

export default SortButtons;
