import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';

// Import des datas en dur Question avec les tags et l'auteur associé

import QuestionsPageStyled from './QuestionsPageStyled.js';
import Question from './Question';

const QuestionsPage = ({ questions }) => (

  <QuestionsPageStyled>
    <Button className="addQuestion" type="submit">New question</Button>
    {questions.map((question) => (
      <Question key={question.id} {...question} />
    ))}
  </QuestionsPageStyled>

);

QuestionsPage.propTypes = {
  questions: PropTypes.array.isRequired,
};

export default QuestionsPage;
