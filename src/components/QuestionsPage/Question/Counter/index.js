// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
// import du frameworks
import { Button, Icon } from 'semantic-ui-react';

// == Import : local
// import du composant styled du counter
import CounterStyled from './CounterStyled';

// == Composant
// ici on a la fonction qui renvoi le formulaire de structure de counter
const Counter = ({ increment, decrement, score }) => (
  <CounterStyled>
    <Icon className="icon-top" name="angle up" size="huge" />
    <div className="value-score">{score}</div>
    <Icon className="icon-bottom" name="angle down" size="huge" />
  </CounterStyled>
);


Counter.propTypes = {
  // count: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  score: PropTypes.number.isRequired,
};
// == Export
export default Counter;
