import React from 'react';
import PropTypes from 'prop-types';
import {
  Form,
  Input,
} from 'semantic-ui-react';

const VerifyPage = ({ value, changeTokenValue }) => (
  <div className="formToken">
    <Form>
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
      </Form.Field>
    </Form>
  </div>
);

VerifyPage.propTypes = {
  value: PropTypes.string.isRequired,
  changeTokenValue: PropTypes.func.isRequired,
};


export default VerifyPage;
