// == Import : npm
import React from 'react';
import Moment from 'react-moment';
import PropTypes from 'prop-types';

// on import la route de navigation
import { NavLink } from 'react-router-dom';
import Avatar from 'react-avatar';


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
  id,
  upvoted,
  downvoted,
  saveQuestionId,
}) => (
  <QuestionStyled>
    <div className="question-container">
      <Counter score={score} questionId={id} upvoted={upvoted} downvoted={downvoted} />
      <NavLink
        exact
        to={`/Answer/${id}`}
        className="text"
        onClick={() => {
          saveQuestionId(id);
        }}
      >
        <div className="tag-container">
          <p className="tag">{tag.name}</p>
        </div>
        <p className="question">{content}</p>
        <div className="separator" />
        <p className="author">posté par {author.name}, le <Moment locale="fr" format="DD-MM-YYYY">{createdAt}</Moment> à <Moment locale="fr" format="HH:mm">{createdAt}</Moment></p>
        <div className="answer-container">
          <p className="answer-number">{answers.length} réponses</p>
        </div>
      </NavLink>
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
  id: PropTypes.number.isRequired,
  upvoted: PropTypes.array.isRequired,
  downvoted: PropTypes.array.isRequired,
  saveQuestionId: PropTypes.func.isRequired,
};

// == Export
export default Question;
