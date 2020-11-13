// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

import SortButtonsStyled from './SortButtonsStyled';

const SortButtons = ({ changeSort, sorted }) => (
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
