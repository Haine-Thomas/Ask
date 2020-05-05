import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Form,
  Input,
  Button,
} from 'semantic-ui-react';
import RebootPasswordStyled from './RebootPasswordStyled';

const RebootPassword = ({ passwordValue, confirmPasswordvalue, changeValue }) => {
  return (
    <RebootPasswordStyled>
      <div className="formNewPassword">
        <Form onSubmit={(event) => {
          event.preventDefault();
        }}
        >
          <Form.Field>
            <label>
              Votre nouveau mot de passe
              <Input
                name="password"
                placeholder="Nouveau mot de passe"
                required
                type="password"
                value={passwordValue}
                onChange={(event) => {
                  changeValue(event.target.value, event.target.name);
                }}
              />
              <Input
                name="confirmPassword"
                placeholder="Confirmez votre nouveau mot de passe"
                required
                type="password"
                value={confirmPasswordvalue}
                onChange={(event) => {
                  changeValue(event.target.value, event.target.name);
                }}
              />
            </label>
            <Button>Valider</Button>
          </Form.Field>
        </Form>
      </div>
    </RebootPasswordStyled>
  );
};

RebootPassword.propTypes = {
  passwordValue: PropTypes.string.isRequired,
  confirmPasswordvalue: PropTypes.string.isRequired,
  changeValue: PropTypes.func.isRequired,
};


export default RebootPassword;
