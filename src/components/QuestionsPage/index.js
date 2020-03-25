// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
// import du frameworks
import { Button, Input } from 'semantic-ui-react';

import SortButtons from 'src/containers/Nav/SortButtons';

// Import des datas en dur Question avec les tags et l'auteur associé

// == Import : local
// import du composant styled du questionpage
import QuestionsPageStyled from './QuestionsPageStyled.js';

import Question from './Question';

// == Composant
// ici on a la fonction qui renvoi le formulaire de structure de questionpage
const QuestionsPage = ({ questions, isLogged, tags, value, changeInputValue, fetchPostQuestion }) => (
    <QuestionsPageStyled>
      {isLogged && (
        <form
          onSubmit={(event) => {
            event.preventDefault();
            fetchPostQuestion();
          }}
          className="new_question_form"
          type="submit"
        >
          <Input type="text" placeholder="Ajouter votre question..." action>
            <input
              name="content"
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
            <Button type="submit">Valider</Button>
          </Input>
        </form>
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
