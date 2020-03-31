// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'semantic-ui-react';

// == Import : local
// import du composant styled du réponse
import Counter from 'src/containers/QuestionsPage/Question/Counter';
import AnswerCounter from 'src/containers/AnswersPage/Answer/Counter';
import SortButtons from 'src/containers/AnswersPage/SortButtons';
import AnswerStyled from './AnswerStyled';

// == Composant
// ici on a la fonction qui renvoi le formulaire de structure de réponse
const Answer = ({
  score,
  content,
  author,
  tag,
  created_at: createdAt,
  answers,
  isLogged,
  fetchPostAnswer,
  changeAnswerValue,
  value,
  sorted,
  id,
  upvoted,
  downvoted,
}) => {
return (
  <AnswerStyled>
    <div className="question-container">
      <Counter score={score} questionId={id} upvoted={upvoted} downvoted={downvoted} />
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
    <div className="container-reponse">
      <div className="reponse-form-container">
        <form
          onSubmit={(event) => {
            event.preventDefault();
            fetchPostAnswer();
          }}
          className="answer-form"
        >
          <h3>Poster une réponse :</h3>
          <input
            name="content"
            type="text"
            value={value}
            placeholder="Ajouter votre réponse..."
            onChange={(event) => {
              changeAnswerValue(event.target.value);
            }}
          />
          {isLogged && (
            <button type="submit"><Icon name="paper plane outline" />Publier</button>
          )}
          {!isLogged && (
            <button
              type="button"
              onClick={() => {
                swal('Vous devez vous connecter pour poster des réponse !', '', 'warning');
              }}
            >
              <Icon name="paper plane outline" />
              Publier
            </button>
          )}
        </form>
      </div>
      <div className="answersQuestion-container">
        <SortButtons />
        { sorted === 'new' && (
          answers.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at)).map((answer) => (
            <div className="panswer" key={answer.id}>
              <AnswerCounter {...answer} />
              <div className="answerText">
                <p className="content-text">{answer.content}</p>
                <div className="separator" />
                <p className="author">posté par {answer.author.name}, le {answer.created_at}</p>
              </div>
              <div className="userButton">
                <Icon name="delete" size="large" />
                <Icon name="edit" size="large" />
              </div>
            </div>
          ))
        )}
        { sorted === 'best' && (
          answers.sort((a, b) => b.score - a.score).map((answer) => (
            <div className="panswer" key={answer.id}>
              <AnswerCounter {...answer} />
              <div className="answerText">
                <p className="content-text">{answer.content}</p>
                <div className="separator" />
                <p className="author">posté par {answer.author.name}, le {answer.created_at}</p>
              </div>
              <div className="userButton">
                <Icon name="delete" size="large" />
                <Icon name="edit" size="large" />
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  </AnswerStyled>
);
};

Answer.propTypes = {
  score: PropTypes.number.isRequired,
  content: PropTypes.string.isRequired,
  author: PropTypes.object.isRequired,
  tag: PropTypes.object.isRequired,
  created_at: PropTypes.string.isRequired,
  answers: PropTypes.array.isRequired,
  isLogged: PropTypes.bool.isRequired,
  fetchPostAnswer: PropTypes.func.isRequired,
  changeAnswerValue: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  sorted: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  upvoted: PropTypes.array.isRequired,
  downvoted: PropTypes.array.isRequired,
};
// == Export
export default Answer;
