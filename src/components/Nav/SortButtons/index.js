import React from 'react';
import PropTypes from 'prop-types';

import SortButtonsStyled from './SortButtonsStyled';

const SortButtons = ({ changeSorted, sorted, fetchQuestions }) => (
  <SortButtonsStyled>
    <button
      type="button"
      className="btn"
      onClick={() => {
        changeSorted('created_at');
        fetchQuestions();
      }}
    >
      New
    </button>
    <button
      type="button"
      className="btn"
      onClick={() => {
        changeSorted('score');
        fetchQuestions();
      }}
    >
      Best
    </button>
  </SortButtonsStyled>
);

SortButtons.propTypes = {
  sorted: PropTypes.string.isRequired,
  changeSorted: PropTypes.func.isRequired,
  fetchQuestions: PropTypes.func.isRequired,
};

export default SortButtons;
