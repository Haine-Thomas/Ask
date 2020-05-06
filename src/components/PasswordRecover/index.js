import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Form,
  Input,
  Button,
} from 'semantic-ui-react';
import PasswordRecoverStyled from './PasswordRecoverStyled';

const PasswordRecover = ({ value, changeEmailValue, sendRecoverEmail, resetPasswordRecoverValue }) => {
  useEffect(resetPasswordRecoverValue, []);
  return (
    <PasswordRecoverStyled>
      <div className="recoverPassword">
      <h1>Mot de passe oublié</h1>
      <p>Un email va vous être envoyé pour remettre un nouveau mot de passe</p>
        <Form onSubmit={(event) => {
          event.preventDefault();
          sendRecoverEmail();
        }}
        >
          <Form.Field>
            <label>
              Votre adresse email
              <Input
                name="email"
                placeholder="Votre adresse mail"
                required
                value={value}
                onChange={(event) => {
                  changeEmailValue(event.target.value);
                }}
              />
            </label>
            <Button>Valider</Button>
          </Form.Field>
        </Form>
      </div>
    </PasswordRecoverStyled>
  );
};

PasswordRecover.propTypes = {
  value: PropTypes.string.isRequired,
  changeEmailValue: PropTypes.func.isRequired,
  sendRecoverEmail: PropTypes.func.isRequired,
  resetPasswordRecoverValue: PropTypes.func.isRequired,
};


export default PasswordRecover;
