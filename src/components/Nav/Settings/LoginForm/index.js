// == Import npm
// eslint-disable-next-line import/no-unresolved
import React from 'react';
import { NavLink } from 'react-router-dom';
// eslint-disable-next-line import/no-unresolved
import PropTypes from 'prop-types';
import {
  Input,
  Form,
  Button,
// eslint-disable-next-line import/no-unresolved
} from 'semantic-ui-react';

// import du composant styled du footer
// eslint-disable-next-line import/no-unresolved
import LoginFormStyled from './LoginFormStyled';

// == Composant
// ici on a la fonction qui renvoi le formulaire de structure de loginform
const LoginForm = ({
  login,
  loginAction,
  changeValue,
  toggleForm,
}) => (
  <LoginFormStyled>
    <Form onSubmit={(event) => {
      event.preventDefault();
      loginAction();
    }}
    >
      <Form.Field>
        <label>
          Email
          <Input
            type="email"
            placeholder="Email"
            name="email"
            value={login.user.email}
            onChange={(event) => {
              changeValue(event.target.value, event.target.name);
            }}
          />
        </label>
      </Form.Field>
      <Form.Field>
        <label>
          Password
          <Input
            type="password"
            placeholder="Mot de passe"
            name="password"
            value={login.user.password}
            onChange={(event) => {
              changeValue(event.target.value, event.target.name);
            }}
          />
        </label>
      </Form.Field>
      <Button.Group>
        <Button size="mini" basic color="yellow" className="btnconnect" type="submit">OK</Button>
        <Button onClick={toggleForm} size="mini" basic color="orange">X</Button>
      </Button.Group>
    </Form>
    <NavLink
      className="signin_btn"
      exact
      to="/signIn"
    >
      Pas encore inscrit ? S'inscrire
    </NavLink>
  </LoginFormStyled>
);

LoginForm.propTypes = {
  loginAction: PropTypes.func.isRequired,
  changeValue: PropTypes.func.isRequired,
  login: PropTypes.shape({
    user: PropTypes.shape({
      email: PropTypes.string.isRequired,
      password: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  toggleForm: PropTypes.func.isRequired,
};

// == Export
export default LoginForm;
