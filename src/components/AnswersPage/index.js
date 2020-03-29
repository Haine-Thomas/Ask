// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
// on import la route de navigation
import { NavLink } from 'react-router-dom';

// import du frameworks

// == Import locaux
// import de la feuille de style associée
import AnswersPageStyled from './AnswersPageStyled';

import Answer from './Answer';
import Question from 'src/components/QuestionsPage/Question';

// == Composant
// ici on a la fonction qui renvoi le formulaire de structure de la page réponse
const AnswersPage = ({ fetchAnswers }) => (
  useEffect(fetchAnswers, []);

  return (
    <AnswersPageStyled>
      <NavLink
        activeClassName="selected"
        exact
        to="/"
        className="btnhome"
      >
        Retour à l'Accueil
      </NavLink>

      {questions.map((question) => (
          <Question key={question.id} {...question} />
      ))}

      {/*answers.map((answer) => (
        <Answer key={question.answer.id} {...answer} />
      ))*/}
    </AnswersPageStyled>
  )
);

AnswersPage.propTypes = {
  fetchAnswers: PropTypes.func.isRequired,
};

// == Export
export default AnswersPage;
