import React from 'react';

import { NavLink } from 'react-router-dom';
import { Image } from 'semantic-ui-react';

import ProfilPageStyled from './ProfilPageStyled';

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


export default ProfilPage;
