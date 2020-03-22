import React from 'react';
// on import la route de navigation
import { NavLink } from 'react-router-dom';

import HeaderStyled from './HeaderStyled';

const Header = () => (
  <HeaderStyled>
    <NavLink
      activeClassName="selected"
      to="/"
      exact
      className="title"
    >
      Ask !
    </NavLink>
    <h3 className="title2">Une question ? Just Ask !</h3>
  </HeaderStyled>
);


export default Header;

// ici on import navlink ainsi on va creer le lien vers pas la page d'accueil par un click direct sur le logo du titre du site
// on entoure le titre par navlink puis on lui ajoute une classe active nommer selected qui va rediriger sur l'accueil du site de maniere exact que au momet du click
