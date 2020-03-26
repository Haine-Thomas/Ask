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
          <button onClick={disconnectAction} type="button" className="btn-nav">Déconnexion</button>
          <NavLink
            activeClassName="btn"
            className="btn"
            exact
            to="/Profil"
          >
            <button className="btn-nav" type="button">
              <Icon name="user" />
              <span className="loginMessage"> {user}</span>
            </button>
          </NavLink>
        </div>
      )}
      {!isLogged && (
        <div>
          {!open && (
            <>
              <button
                type="button"
                className="btn-nav"
                onClick={toggleForm}
              >
                Connexion
              </button>
              <NavLink
                to="/signIn"
                exact
              >
                <button className="btn-nav" type="button">
                  Inscription
                </button>
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
