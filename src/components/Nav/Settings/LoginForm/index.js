import React from 'react';
import { Input, Form, Button } from 'semantic-ui-react';

import LoginFormStyled from './LoginFormStyled';


const LoginForm = () => (
  <LoginFormStyled>
    <Form>
      <Form.Field>
        <label>
          Email
          <Input type="email" placeholder="Email" />
        </label>
      </Form.Field>
      <Form.Field>
        <label>
          Password
          <Input type="password" placeholder="Mot de passe" />
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

export default LoginForm;
