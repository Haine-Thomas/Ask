// == Import : npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
// import du frameworks
import { Button, Icon } from 'semantic-ui-react';

// == Import : local
// import du composant styled du counter
import CounterStyled from './CounterStyled';

// == Composant
// ici on a la fonction qui renvoi le formulaire de structure de counter
const Counter = ({ increment, decrement, fetchQuestionScore, score, questionId }) => (
  <CounterStyled>
    <Icon
      className="icon-top"
      name="angle up"
      size="huge"
      onClick={() => {
        increment(questionId);
        fetchQuestionScore();
      }}
    />
    <div className="value-score">{score}</div>
    <Icon
      className="icon-bottom"
      name="angle down"
      size="huge"
      onClick={() => {
        decrement(questionId);
        fetchQuestionScore();
      }}
    />
  </CounterStyled>
);


Counter.propTypes = {
  // count: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  score: PropTypes.number.isRequired,
  questionId: PropTypes.number.isRequired,
  fetchQuestionScore: PropTypes.func.isRequired,
};
// == Export
export default Counter;
