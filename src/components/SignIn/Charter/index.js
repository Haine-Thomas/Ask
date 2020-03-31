/* eslint-disable import/no-unresolved */
// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

// import du frameworks

// == Import : npm locaux
// import de la feuille de style associée
import CharterStyled from './CharterStyled';

// == Composant
// ici on a la fonction qui renvoi le formulaire de structure de signin
const Charter = () => (
  <CharterStyled>
    <NavLink exact to="/SiteCharter">la charte du site</NavLink>
  </CharterStyled>
);

// == Export
export default Charter;
