// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
// on import la route de navigation
import { NavLink } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';

// import du frameworks

// == Import locaux
import Answer from 'src/containers/AnswersPage/Answer';
// import de la feuille de style associée
import AnswersPageStyled from './AnswersPageStyled';


// == Composant
// ici on a la fonction qui renvoi le formulaire de structure de la page réponse
const AnswersPage = ({ questions, clickedQuestionId }) => (
  <AnswersPageStyled>
    <div className="gohome">
      <NavLink
        exact
        to="/"
        className="btnhome"
      >
        <Icon name="reply" />
        Retour à l'Accueil
      </NavLink>
    </div>
    {questions.map((question) => (
      question.id === clickedQuestionId && (
        <Answer key={question.id} {...question} />
      )
    ))}

  </AnswersPageStyled>
);

AnswersPage.propTypes = {
  questions: PropTypes.array.isRequired,
  clickedQuestionId: PropTypes.number.isRequired,
};

// == Export
export default AnswersPage;
