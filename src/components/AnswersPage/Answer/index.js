// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import : local


// import du composant styled du réponse
import AnswerStyled from './AnswerStyled';
import Counter from './CounterStyled';
// == Composant
// ici on a la fonction qui renvoi le formulaire de structure de réponse
const Answer = ({
  score,
}) => (
  <AnswerStyled>
    <Counter />
    <div className="answer-container">
      <div className="container">
        <p className="answer">reponse</p>
        <div className="separator" />
        <p className="author">posté par author, le date</p>
      </div>
    </div>
  </AnswerStyled>
);

// == Export
export default Answer;
