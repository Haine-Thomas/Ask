/* eslint-disable import/no-unresolved */
// == Import : npm
import React from 'react';

// import du frameworks

// == Import : npm locaux
// import de la feuille de style associée
import CharterStyled from './CharterStyled';
import SiteCharter from './SiteCharter';
// == Composant
// ici on a la fonction qui renvoi le formulaire de structure de signin
const Charter = () => (
  <CharterStyled>
    <SiteCharter />
  </CharterStyled>
);

// == Export
export default Charter;
