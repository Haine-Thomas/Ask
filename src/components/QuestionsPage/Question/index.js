import React from 'react';
import PropTypes from 'prop-types';

// on import la route de navigation
import { NavLink } from 'react-router-dom';

import Counter from 'src/containers/QuestionsPage/Question/Counter';

import QuestionStyled from './QuestionStyled';

const Question = ({
  score,
  content,
  author,
  tag,
  created_at: createdAt,
}) => (
  <QuestionStyled>
    <Counter score={score} />
    <NavLink
      activeClassName="selected"
      exact
      to="/Answer"
      className="text"
    >
      <p className="tag">{tag.name}</p>
      <h1 className="question">{content}</h1>
      <p className="author">posté par {author.name}, le {createdAt}</p>
    </NavLink>
  </QuestionStyled>
);

Question.propTypes = {
  score: PropTypes.number.isRequired,
  content: PropTypes.string.isRequired,
  author: PropTypes.object.isRequired,
  tag: PropTypes.object.isRequired,
  created_at: PropTypes.string.isRequired,
};

export default Question;
