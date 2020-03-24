// == Import npm
import React from 'react';
// on import la route de navigation
import { NavLink } from 'react-router-dom';

// import du frameworks
import {
  Input,
  Form,
  Checkbox,
  Button,
} from 'semantic-ui-react';

// == Import locaux
// import de la feuille de style associée
import AnswersPageStyled from './AnswersPageStyled';

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
    <h1 className="title">question avec compteur, nom de l auteur, date du poste et catégorie</h1>
    <Form>
      <Button className="btn" type="submit">New</Button>
    </Form>
    <Form>
      <Button className="btn" type="submit">Best</Button>
    </Form>
    <h1 className="title">réponse avec compteur, nom de l auteur et date du poste</h1>
  </AnswersPageStyled>
);

// == Export
export default AnswersPage;
