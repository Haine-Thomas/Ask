// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import swal from 'sweetalert';
// import du frameworks
import { Icon } from 'semantic-ui-react';

// == Import : local
// import du composant styled du counter
import CounterStyled from './CounterStyled';

// == Composant
// ici on a la fonction qui renvoi le formulaire de structure de counter
const Counter = ({
  increment,
  decrement,
  fetchQuestionScore,
  score,
  questionId,
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
        increment(questionId);
        fetchQuestionScore();
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
        decrement(questionId);
        fetchQuestionScore();
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
  // count: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  score: PropTypes.number.isRequired,
  questionId: PropTypes.number.isRequired,
  fetchQuestionScore: PropTypes.func.isRequired,
  userId: PropTypes.number.isRequired,
  isLogged: PropTypes.bool.isRequired,
  upvoted: PropTypes.array.isRequired,
  downvoted: PropTypes.array.isRequired,
};

// == Export
export default Counter;
