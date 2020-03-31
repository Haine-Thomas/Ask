// == Import : npm
import React from 'react';
import Moment from 'react-moment';
import PropTypes from 'prop-types';

import { Icon, Button } from 'semantic-ui-react';

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
  id,
  upvoted,
  downvoted,
  deleteQuestion,
}) => (
  <QuestionStyled>
    <div className="question-container">
      <Counter score={score} questionId={id} upvoted={upvoted} downvoted={downvoted} />
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
        <p className="author">posté par {author.name}, le <Moment locale="fr" format="DD-MM-YYYY">{createdAt}</Moment> à <Moment locale="fr" format="HH:mm">{createdAt}</Moment></p>
        <Button compact size="mini" circular type="button"><Icon name="edit" /></Button>
        <Button onClick={deleteQuestion} compact size="mini" circular><Icon name="trash alternate outline" /></Button>
        <div className="answer-container">
          <p className="answer-number"><Icon name="comments outline" />{answers.length} réponses</p>
        </div>
      </NavLink>
    </div>
  </QuestionStyled>
);

Question.propTypes = {
  deleteQuestion: PropTypes.func.isRequired,
  score: PropTypes.number.isRequired,
  content: PropTypes.string.isRequired,
  author: PropTypes.object.isRequired,
  tag: PropTypes.object.isRequired,
  created_at: PropTypes.string.isRequired,
  answers: PropTypes.array.isRequired,
  id: PropTypes.number.isRequired,
  upvoted: PropTypes.array.isRequired,
  downvoted: PropTypes.array.isRequired,
};

// == Export
export default Question;
