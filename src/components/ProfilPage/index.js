import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'semantic-ui-react';

import ProfilPageStyled from './ProfilPageStyled.js';

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

QuestionsPage.propTypes = {
};

export default ProfilPage;
