// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { Button, Menu, Icon } from 'semantic-ui-react';

// on import la route de navigation
import { NavLink } from 'react-router-dom';


// == Import npm locaux
import LoginForm from 'src/containers/Nav/Settings/LoginForm';
// import du composant styled du footer
import SettingsStyled from './SettingsStyled';

// == Composant
// ici on a la fonction qui renvoi le formulaire de structure de settings
const Settings = ({ open, isLogged, toggleForm, disconnectAction, user}) => (
  <SettingsStyled>
    <div>
      {isLogged && (
        <div>
          <Button basic color="white" onClick={disconnectAction} type="button" className="btn-nav">Déconnexion</Button>
          <NavLink
            activeClassName="btn"
            className="btn"
            exact
            to="/Profil"
          >
            <Button basic color="white" className="btn-nav" type="button">
              <Icon name="user" />
              <span className="loginMessage"> {user}</span>
            </Button>
          </NavLink>
        </div>
      )}
      {!isLogged && (
        <div>
          {!open && (
            <>
              <Button
                basic
                color="white"
                type="button"
                className="btn-nav"
                onClick={toggleForm}
              >
                Connexion
              </Button>
              <NavLink
                to="/signIn"
                exact
              >
                <Button basic color="white" className="btn-nav" type="button">
                  Inscription
                </Button>
              </NavLink>
            </>
          )}
            {open && (
              <LoginForm />
            )}
        </div>
      )}
    </div>
  </SettingsStyled>
);

Settings.propTypes = {
  open: PropTypes.bool.isRequired,
  isLogged: PropTypes.bool.isRequired,
  user: PropTypes.string.isRequired,
  toggleForm: PropTypes.func.isRequired,
  disconnectAction: PropTypes.func.isRequired,
};

// == Export
export default Settings;
