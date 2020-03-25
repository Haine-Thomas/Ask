import React from 'react';

import Settings from 'src/containers/Nav/Settings';
import SortButtons from 'src/containers/Nav/SortButtons';
import SearchBar from './SearchBar';

import NavStyled from './NavStyled';

const Nav = () => (
  <NavStyled>
    <SortButtons />
    <SearchBar />
    <Settings />
  </NavStyled>

);

export default Nav;
