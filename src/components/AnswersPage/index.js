// == Import npm
import React from 'react';

// on import la route de navigation
import { NavLink } from 'react-router-dom';

// import du frameworks

// == Import locaux
// import de la feuille de style associée
import AnswersPageStyled from './AnswersPageStyled';

import Answer from './Answer';

// == Composant
// ici on a la fonction qui renvoi le formulaire de structure de la page réponse
const AnswersPage = () => (
  <AnswersPageStyled>
    <NavLink
      activeClassName="selected"
      exact
      to="/"
      className="btnhome"
    >
      Retour à l'Accueil
    </NavLink>
    <h1>question</h1>
    <Answer />
  </AnswersPageStyled>
);

// == Export
export default AnswersPage;
