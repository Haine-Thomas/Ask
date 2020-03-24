import React from 'react';
import PropTypes from 'prop-types';
import { Button, Input, Select } from 'semantic-ui-react';

// Import des datas en dur Question avec les tags et l'auteur associé

import QuestionsPageStyled from './QuestionsPageStyled.js';
import Question from './Question';

const QuestionsPage = ({ questions, isLogged, tags }) => (
    <QuestionsPageStyled>
      {isLogged && (
        <form className="new_question_form" type="submit">
          <Input type="text" placeholder="Ajouter votre question..." action>
            <input />
            <select compact name="tagId">
              <option value="">Catégories</option>
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
};

export default QuestionsPage;
