// == Import npm
import React from 'react';

// on import la route de navigation
import { NavLink } from 'react-router-dom';

// import du composant styled du header
import HeaderStyled from './HeaderStyled';

// == Composant
// ici on a la fonction qui renvoi le formulaire de structure de header
const Header = () => {
  return(
  <HeaderStyled>
    <span>Une question ? Just </span>
    <NavLink
      to="/"
      exact
      className="title"
    >
      <h1>ASK !</h1>
    </NavLink>
  </HeaderStyled>
);
};

// == Export
export default Header;
