// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import { Button, Icon } from 'semantic-ui-react';
// == Import : local
import CounterStyled from './CounterStyled';

// == Composant
const Counter = ({ increment, decrement, score }) => {
  console.log(increment);
  return (
    <CounterStyled>
      <Button animated="vertical" className="button" onClick={increment}>
        <Button.Content visible type="submit">
          <Icon name="angle up" />
        </Button.Content>
        <Button.Content hidden type="submit">
          <Icon name="thumbs up outline" />
        </Button.Content>
      </Button>
      <div className="value">{score}</div>
      <Button animated="vertical" className="button" onClick={decrement}>
        <Button.Content visible type="submit">
          <Icon name="angle down" />
        </Button.Content>
        <Button.Content hidden type="submit">
          <Icon name="thumbs down outline" />
        </Button.Content>
      </Button>
    </CounterStyled>
  );
};

Counter.propTypes = {
  // count: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  score: PropTypes.number.isRequired,
};
// == Export
export default Counter;
