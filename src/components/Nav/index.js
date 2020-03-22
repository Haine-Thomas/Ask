import React from 'react';

import Settings from 'src/containers/Nav/Settings';
import SearchBar from './SearchBar';
import SortButtons from './SortButtons';

import NavStyled from './NavStyled';

const Nav = () => (
  <NavStyled>
    <SortButtons />
    <SearchBar />
    <Settings />
  </NavStyled>

);

export default Nav;
