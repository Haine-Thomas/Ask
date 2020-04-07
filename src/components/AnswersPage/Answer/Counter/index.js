// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import swal from 'sweetalert';
import { Icon } from 'semantic-ui-react';

import CounterStyled from './CounterStyled';

const Counter = ({
  incrementAnswer,
  decrementAnswer,
  fetchAnswerScore,
  score,
  id,
  userId,
  isLogged,
  upvoted,
  downvoted,
}) => (
  <CounterStyled>
    {isLogged && (
    <Icon
      className={upvoted.includes(userId) ? 'icon-top-voted' : 'icon-top'}
      name="angle up"
      size="huge"
      onClick={() => {
        incrementAnswer(id);
        fetchAnswerScore();
      }}
    />
    )}
    {!isLogged && (
    <Icon
      className="icon-top"
      name="angle up"
      size="huge"
      onClick={() => {
        swal('Vous devez vous connecter pour voter !', '', 'warning');
      }}
    />
    )}
    <div className="value-score">{score}</div>
    {isLogged && (
    <Icon
      className={downvoted.includes(userId) ? 'icon-bottom-voted' : 'icon-bottom'}
      name="angle down"
      size="huge"
      onClick={() => {
        decrementAnswer(id);
        fetchAnswerScore();
      }}
    />
    )}
    {!isLogged && (
      <Icon
        className="icon-bottom"
        name="angle down"
        size="huge"
        onClick={() => {
          swal('Vous devez vous connecter pour voter !', '', 'warning');
        }}
      />
    )}
  </CounterStyled>
);

Counter.propTypes = {
  incrementAnswer: PropTypes.func.isRequired,
  decrementAnswer: PropTypes.func.isRequired,
  score: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  fetchAnswerScore: PropTypes.func.isRequired,
  userId: PropTypes.number.isRequired,
  isLogged: PropTypes.bool.isRequired,
  upvoted: PropTypes.array.isRequired,
  downvoted: PropTypes.array.isRequired,
};

// == Export
export default Counter;
