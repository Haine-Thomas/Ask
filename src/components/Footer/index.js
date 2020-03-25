// == Import npm
import React from 'react';

// import du composant styled du footer
import FooterStyled from './FooterStyled';

// == Composant
// ici on a la fonction qui renvoi le formulaire de structure de footer
const Footer = () => (
  <FooterStyled>
    <a>CONTACT</a>
    <a>MENTIONS LEGALES</a>
    <a>COPYRIGHT</a>
  </FooterStyled>
);

// == Export
export default Footer;
