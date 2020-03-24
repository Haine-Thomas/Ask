import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';

import { NavLink } from 'react-router-dom';

import LoginForm from 'src/containers/Nav/Settings/LoginForm';

import SettingsStyled from './SettingsStyled';


const Settings = ({ open, isLogged, toggleForm, disconnectAction }) => (
  <SettingsStyled>
    <div>
      {isLogged && (
        <div>
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
  toggleForm: PropTypes.func.isRequired,
  disconnectAction: PropTypes.func.isRequired,
};

export default Settings;
