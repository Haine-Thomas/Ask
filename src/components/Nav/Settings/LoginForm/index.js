import React from 'react';
import PropTypes from 'prop-types';
import { Input, Form, Button } from 'semantic-ui-react';

import LoginFormStyled from './LoginFormStyled';


const LoginForm = ({ login, loginAction, changeValue }) => (
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
      <Button
        className="btnconnect"
        type="submit"
      >
        Ok
      </Button>
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
};

export default LoginForm;
