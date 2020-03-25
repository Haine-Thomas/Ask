// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// import de la route de navigation
import { NavLink } from 'react-router-dom';
// import du frameworks

import Counter from 'src/components/QuestionsPage/Question/Counter';
// import du composant styled du profil page
import ProfilPageStyled from './ProfilPageStyled';

// == Composant
// ici on a la fonction qui renvoi le formulaire de structure de profilpage
const ProfilPage = ({ pseudo, email }) => (
  <ProfilPageStyled>
    <h1 className="title_profil">Profil</h1>
    <div className="profil">
      <p classsname="subtitle">Pseudo: {pseudo}</p>
      <p classsname="subtitle">Email: {email}</p>
      <p classsname="subtitle">Inscrit depuis le 23 Mars 2020</p>
      <NavLink
        activeClassName="selected"
        exact
        to="/"
        className="btnModify"
      >
        Modifer
      </NavLink>
    </div>
    <div>
      <h1 className="title_profil">Mes questions:</h1>
      <div className="question_block">
        <Counter />
        <NavLink
          activeClassName="selected"
          exact
          to="/Answer"
          className="text"
        >
          <p className="tag">h</p>
          <h1 className="question">h</h1>
          <p className="author">posté par h, le h</p>
        </NavLink>
      </div>
    </div>
  </ProfilPageStyled>
);

ProfilPage.propTypes = {
  pseudo: PropTypes.string,
  email: PropTypes.string,
};

ProfilPage.defaultProps = {
  pseudo: '',
  email: '',
};

// == Export
export default ProfilPage;
