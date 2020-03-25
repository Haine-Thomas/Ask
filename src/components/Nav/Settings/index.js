// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { Button, Menu } from 'semantic-ui-react';

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
          <p className="loginMessage">Bienvenue {user}</p>
          <Button onClick={disconnectAction} type="button" className="btn">Déconnexion</Button>
          <NavLink
            activeClassName="btn"
            className="btn"
            exact
            to="/Profil"
          >
            Profil
          </NavLink>
        </div>
      )}
      {!isLogged && (
        <div>
          {!open && (
            <>
              <Button
                type="button"
                className="btn"
                onClick={toggleForm}
              >
                Connexion
              </Button>
              <NavLink
                activeClassName="selected"
                to="/signIn"
                exact
                className="btn"
              >
                Inscription
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
