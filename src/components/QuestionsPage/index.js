import React from 'react';
import PropTypes from 'prop-types';
import { Button, Input, Select } from 'semantic-ui-react';

// Import des datas en dur Question avec les tags et l'auteur associé

import QuestionsPageStyled from './QuestionsPageStyled.js';
import Question from './Question';

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

export default QuestionsPage;
