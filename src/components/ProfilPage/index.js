import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'semantic-ui-react';

import ProfilPageStyled from './ProfilPageStyled.js';

const ProfilPage = () => (
  <QuestionsPageStyled>
    <h1>Profil</h1>
    <Image src="'/images/wireframe/square-image.png'" circular />
    <div>
      <p>Pseudo: Damien</p>
      <p>Date de naissance:</p>
      <p>Email: damien97@gmail.com</p>
      <p>Inscrit depuis le 23 Mars 2020</p>
    </div>
    <div>
      <h1>your question</h1>
    </div>
    <div>
      <h1>your response</h1>
    </div>
    <nav>
      <button type="button">Modifier</button>
    </nav>
  </QuestionsPageStyled>
);

QuestionsPage.propTypes = {
};

export default ProfilPage;
