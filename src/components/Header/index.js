// == Import npm
import React from 'react';

// on import la route de navigation
import { NavLink } from 'react-router-dom';
import { Image } from 'semantic-ui-react';
import logo from 'src/assets/img/logo-ask.jpg';

// import du composant styled du header
import HeaderStyled from './HeaderStyled';

// == Composant
// ici on a la fonction qui renvoi le formulaire de structure de header
const Header = () => (
  <HeaderStyled>
    <span>Une question ? Just </span>
    <NavLink
      to="/"
      exact
      className="logo"
    >
      <Image src={logo} alt="logo-ask" />
    </NavLink>
  </HeaderStyled>
);

// == Export
export default Header;
