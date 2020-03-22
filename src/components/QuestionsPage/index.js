import React from 'react';

import { Button } from 'semantic-ui-react';

// Import des datas en dur Question avec les tags et l'auteur associé
import questionsData from 'src/data/questions';

import QuestionsPageStyled from './QuestionsPageStyled.js';
import Question from './Question';

const QuestionsPage = () => (

  <QuestionsPageStyled>
    <Button className="addQuestion" type="submit">New question</Button>
    {questionsData.map((question) => (
      <Question key={question.id} {...question} />
    ))}
  </QuestionsPageStyled>

);


export default QuestionsPage;
