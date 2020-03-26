// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';

// on import la route de navigation
import { NavLink } from 'react-router-dom';

// == Import : local
import Counter from 'src/containers/QuestionsPage/Question/Counter';

// import du composant styled du question
import QuestionStyled from './QuestionStyled';

// == Composant
// ici on a la fonction qui renvoi le formulaire de structure de question
const Question = ({
  score,
  content,
  author,
  tag,
  created_at: createdAt,
  answers,
}) => (
  <QuestionStyled>
    <div className="question-container">
      <Counter score={score} />
      <NavLink
        exact
        to="/Answer"
        className="text"
      >
        <div className="tag-container">
          <p className="tag">{tag.name}</p>
        </div>
        <p className="question">{content}</p>
        <div className="separator" />
        <p className="answer-number">{answers.length} réponses</p>
      </NavLink>
    </div>
    <div className="author-container">
      <p className="author">posté par {author.name}, le {createdAt}</p>
    </div>
  </QuestionStyled>
);

Question.propTypes = {
  score: PropTypes.number.isRequired,
  content: PropTypes.string.isRequired,
  author: PropTypes.object.isRequired,
  tag: PropTypes.object.isRequired,
  created_at: PropTypes.string.isRequired,
  answers: PropTypes.array.isRequired,
};

// == Export
export default Question;
