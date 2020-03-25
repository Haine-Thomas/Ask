// == Import npm
import React from 'react';

// == Import npm locaux
import Settings from 'src/containers/Nav/Settings';
import SortButtons from 'src/containers/Nav/SortButtons';
import SearchBar from './SearchBar';

// import du composant styled de nav
import NavStyled from './NavStyled';

// == Composant
// ici on a la fonction qui renvoi le formulaire de structure de Nav
const Nav = () => (
  <NavStyled>
    <SortButtons />
    <SearchBar />
    <Settings />
  </NavStyled>

);

// == Export
export default Nav;
