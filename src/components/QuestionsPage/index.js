// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
// import du frameworks
import { Button, Input, Select } from 'semantic-ui-react';

import SortButtons from 'src/containers/Nav/SortButtons';
import Question from 'src/containers/QuestionsPage/Question';

// Import des datas en dur Question avec les tags et l'auteur associé

// == Import : local
// import du composant styled du questionpage
import QuestionsPageStyled from './QuestionsPageStyled.js';

// == Composant
// ici on a la fonction qui renvoi le formulaire de structure de questionpage
const QuestionsPage = ({ 
  questions,
  isLogged,
  tags,
  value,
  changeInputValue,
  fetchPostQuestion,
}) => (
  <QuestionsPageStyled>
    {isLogged && (
      <div className="question-form-container">
        <form
          onSubmit={(event) => {
            event.preventDefault();
            fetchPostQuestion();
          }}
          className="question-form"
        >
          <input
            name="content"
            type="text"
            placeholder="Ajouter votre question..."
            value={value}
            onChange={(event) => {
              changeInputValue(event.target.value, event.target.name);
            }}
          />
          <select
            onChange={(event) => {
              changeInputValue(event.target.value, event.target.name);
            }}
            compact="true"
            name="tagId"
          >
            <option value="default">Catégories</option>
            {tags.map((tag) => (
              <option key={tag.id} value={tag.id}>{tag.name}</option>
            ))}
          </select>
          <button type="submit">Valider</button>
        </form>
      </div>
    )}
    <SortButtons />
    {questions.map((question) => (
      <Question key={question.id} {...question} />
    ))}
  </QuestionsPageStyled>
);

QuestionsPage.propTypes = {
  questions: PropTypes.array.isRequired,
  isLogged: PropTypes.bool.isRequired,
  tags: PropTypes.array.isRequired,
  value: PropTypes.string.isRequired,
  changeInputValue: PropTypes.func.isRequired,
  fetchPostQuestion: PropTypes.func.isRequired,
};

// == Export
export default QuestionsPage;
