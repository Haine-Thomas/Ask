// == Import npm
import React from 'react';

// == Import npm locaux
import Settings from 'src/containers/Nav/Settings';
import SearchBar from './SearchBar';

// import du composant styled de nav
import NavStyled from './NavStyled';

// == Composant
// ici on a la fonction qui renvoi le formulaire de structure de Nav
const Nav = () => (
  <NavStyled>
    <div className="nav-container">
      <SearchBar />
      <Settings />
    </div>
  </NavStyled>

);

// == Export
export default Nav;
