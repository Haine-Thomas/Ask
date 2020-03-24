import React from 'react';
import PropTypes from 'prop-types';
import { Input, Form, Button } from 'semantic-ui-react';

import LoginFormStyled from './LoginFormStyled';


const LoginForm = ({ login, loginAction, changeValue, toggleForm }) => (
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
      <div>
        <Button size="mini" positive className="btnconnect" type="submit">OK</Button>
        <Button onClick={toggleForm} size="mini">Annuler</Button>
      </div>
    </Form>
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

export default LoginForm;
