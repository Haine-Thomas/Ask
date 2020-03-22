import React from 'react';
import { NavLink } from 'react-router-dom';

import SortButtonsStyled from './SortButtonsStyled';

const SortButtons = () => (
  <SortButtonsStyled>
    <NavLink
      activeClassName="selected"
      to=""
      exact
    >
      <button type="button" className="btn">New</button>
    </NavLink>
    <NavLink
      activeClassName="selected"
      to=""
      exact
    >
      <button type="button" className="btn">Best</button>
    </NavLink>
  </SortButtonsStyled>
);

export default SortButtons;
