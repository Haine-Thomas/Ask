// == Import npm
import React from 'react';

// on import la route de navigation
import { NavLink } from 'react-router-dom';

// import du composant styled du header
import HeaderStyled from './HeaderStyled';

// == Composant
// ici on a la fonction qui renvoi le formulaire de structure de header
const Header = () => (
  <HeaderStyled>
    <NavLink
      to="/"
      exact
    >
      <span className="slogan">Une question ? Just Ask </span>
    </NavLink>
  </HeaderStyled>
);

// == Export
export default Header;
