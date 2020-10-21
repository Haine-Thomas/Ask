import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Form,
  Input,
  Button,
} from 'semantic-ui-react';

const VerifyPage = ({ value, changeTokenValue, activateUser, resetTokenValue }) => {
  useEffect(resetTokenValue, []);
  return (
    <div className="formToken">
      <Form onSubmit={(event) => {
        event.preventDefault();
        activateUser();
      }}
      >
        <Form.Field>
          <label>
            Copiez et collez votre token reçu par mail et validez pour confirmer votre compte!
            <Input
              name="formToken"
              placeholder="Votre token"
              required
              value={value}
              onChange={(event) => {
                changeTokenValue(event.target.value);
              }}
            />
          </label>
          <Button>Valider</Button>
        </Form.Field>
      </Form>
    </div>
  );
};

VerifyPage.propTypes = {
  value: PropTypes.string.isRequired,
  changeTokenValue: PropTypes.func.isRequired,
  activateUser: PropTypes.func.isRequired,
  resetTokenValue: PropTypes.func.isRequired,
};


export default VerifyPage;
