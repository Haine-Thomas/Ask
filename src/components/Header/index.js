// == Import npm
import React from 'react';

// on import la route de navigation
import { NavLink } from 'react-router-dom';
import HeaderStyled from './HeaderStyled';

const Header = () => (
  <HeaderStyled>
    <NavLink
      to="/"
      exact
    >
      <h1 className="slogan">Une question ?  Just <span> Ask </span></h1>
    </NavLink>
  </HeaderStyled>
);

// == Export
export default Header;
