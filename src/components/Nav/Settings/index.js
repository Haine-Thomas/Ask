// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { Button, Icon } from 'semantic-ui-react';

// on import la route de navigation
import { NavLink } from 'react-router-dom';


// == Import npm locaux
import LoginForm from 'src/containers/Nav/Settings/LoginForm';
// import du composant styled du footer
import SettingsStyled from './SettingsStyled';

// == Composant
// ici on a la fonction qui renvoi le formulaire de structure de settings
const Settings = ({
  open,
  isLogged,
  toggleForm,
  disconnectAction,
  user,
  resetIsVerified,
}) => (
  <SettingsStyled>
    <div>
      {isLogged && (
        <div>
          <Button basic onClick={disconnectAction} type="button" className="btn-nav">Déconnexion</Button>
          <NavLink
            activeClassName="btn"
            className="btn"
            exact
            to="/Profil"
          >
            <Button basic className="btn-nav" type="button">
              <Icon color="orange" name="user" />
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
                <Button basic className="btn-nav" type="button" onClick={resetIsVerified}>
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
  resetIsVerified: PropTypes.func.isRequired,
};

// == Export
export default Settings;
