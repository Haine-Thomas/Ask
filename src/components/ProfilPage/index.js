// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { Button, Icon } from 'semantic-ui-react';

// import de la route de navigation
import { NavLink } from 'react-router-dom';
// import du frameworks

import Counter from 'src/components/QuestionsPage/Question/Counter';
// import du composant styled du profil page
import ProfilPageStyled from './ProfilPageStyled';

// == Composant
// ici on a la fonction qui renvoi le formulaire de structure de profilpage
const ProfilPage = ({ pseudo, email }) => (
  <ProfilPageStyled>
    <h1 className="title">Mon profil</h1>
    <div>
      <div className="profil">
        <p classsname="profil_name">{pseudo}</p>
        <p classsname="profil_email"><Icon name="envelope" />Email: {email}</p>
        <p className="bbday"><Icon name="birthday cake" />JJ/MM/AAAA</p>
        <p classsname="profil_date"><Icon name="pencil" /> Inscrit depuis le 23 Mars 2020</p>
        <Button>
          <Icon name="cogs" /> Modifier le profil
        </Button>
      </div>
    </div>
  </ProfilPageStyled>
);

ProfilPage.propTypes = {
  pseudo: PropTypes.string,
  email: PropTypes.string,
};

ProfilPage.defaultProps = {
  pseudo: '',
  email: '',
};

// == Export
export default ProfilPage;
