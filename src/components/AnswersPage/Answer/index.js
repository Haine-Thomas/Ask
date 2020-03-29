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
    <div className="question-container">
      <Counter score={score} />
      <div className="text">
        <div className="tag-container">
          <p className="tag">{tag.name}</p>
        </div>
        <p className="question">{content}</p>
        <div className="separator" />
        <p className="author">posté par {author.name}, le {createdAt}</p>
        <div className="answer-container">
          <p className="answer-number">{answers.length} réponses</p>
        </div>
      </div>
    </div>

    <section className="answers-container">
      <div className="answersQuestion-container">
        {answers.map((answer) => (
          <p key={answer.id}>
            <Counter score={score} />
            <div className="answerText">
              {answer.content}
              <div className="separator" />
              <p className="author">posté par {author.name}, le {createdAt}</p>
            </div>
          </p>
        ))}
      </div>
    </section>
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
