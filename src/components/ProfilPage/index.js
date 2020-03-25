// == Import npm
import React from 'react';

// import de la route de navigation
import { NavLink } from 'react-router-dom';
// import du frameworks
import { Image } from 'semantic-ui-react';

// import du composant styled du profil page
import ProfilPageStyled from './ProfilPageStyled';

// == Composant
// ici on a la fonction qui renvoi le formulaire de structure de profilpage
const ProfilPage = () => (
  <ProfilPageStyled>
    <h1 className="title">Profil</h1>
    <Image src="'/images/wireframe/square-image.png'" circular />
    <div>
      <p classsname="subtitle">Pseudo: Damien</p>
      <p classsname="subtitle">Date de naissance:</p>
      <p classsname="subtitle">Email: damien97@gmail.com</p>
      <p classsname="subtitle">Inscrit depuis le 23 Mars 2020</p>
    </div>
    <div>
      <p classsname="subtitle">your question</p>
    </div>
    <div>
      <p classsname="subtitle">your response</p>
    </div>
    <NavLink
      activeClassName="selected"
      exact
      to="/"
      className="btnModify"
    >
      Modifer
    </NavLink>
  </ProfilPageStyled>
);

// == Export
export default ProfilPage;
