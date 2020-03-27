// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import : local
// import du composant styled du réponse
import AnswerStyled from './AnswerStyled';
import Counter from './Counter';

// == Composant
// ici on a la fonction qui renvoi le formulaire de structure de réponse
const Answer = ({
  score,
  content,
  author,
  tag,
  created_at: createdAt,
  answers,
  id,
}) => (
  <AnswerStyled>
    <h1>{content}</h1>
    {answers.map((answer) => (
      <p key={answer.id}>{answer.content}</p>
    ))}
  </AnswerStyled>
);

Answer.propTypes = {
  score: PropTypes.number.isRequired,
  content: PropTypes.string.isRequired,
  author: PropTypes.object.isRequired,
  tag: PropTypes.object.isRequired,
  created_at: PropTypes.string.isRequired,
  answers: PropTypes.array.isRequired,
  id: PropTypes.number.isRequired,
};
// == Export
export default Answer;
