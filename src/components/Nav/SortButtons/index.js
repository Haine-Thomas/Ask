// == Import npm
import React from 'react';

// on import la route de navigation
import { NavLink } from 'react-router-dom';

// import du composant styled du sortbuttons
import SortButtonsStyled from './SortButtonsStyled';

// == Composant
// ici on a la fonction qui renvoi le formulaire de structure de sortbuttons
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

// == Export
export default SortButtons;
