/* eslint-disable import/no-unresolved */
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

// import du frameworks
import {
  Input,
  Form,
  Checkbox,
  Button,
} from 'semantic-ui-react';

// import de la feuille de style associée
import SignInStyled from './SignInStyled';


const SignIn = ({
  signIn,
  changeValue,
  signInUser,
  changeCheckbox,
}) => (
  <SignInStyled>
    <NavLink
      activeClassName="selected"
      exact
      to="/"
      className="btnhome"
    >
      Retour à l'Accueil
    </NavLink>
    <h1 className="title">INSCRIPTION</h1>
    <Form onSubmit={(event) => {
      event.preventDefault();
      signInUser();
    }}
    >
      <Form.Field>
        <label>
          Pseudo
          <Input
            type="text"
            name="pseudo"
            placeholder="Pseudo"
            value={signIn.pseudo}
            onChange={(event) => {
              changeValue(event.target.value, event.target.name);
            }}
          />
        </label>
      </Form.Field>
      <Form.Field>
        <label>
          Date de naissance
          <Input
            type="date"
            placeholder="Date de naissance"
            name="birthday"
            value={signIn.birthday}
            onChange={(event) => {
              changeValue(event.target.value, event.target.name);
            }}
          />
        </label>
      </Form.Field>
      <Form.Field>
        <label>
          Email
          <Input
            icon="at"
            type="text"
            name="email"
            placeholder="Email"
            value={signIn.email}
            onChange={(event) => {
              changeValue(event.target.value, event.target.name);
            }}
          />
        </label>
      </Form.Field>
      <Form.Field>
        <label>
          Mot de passe
          <Input
            type="password"
            name="password"
            placeholder="Mot de passe"
            value={signIn.password}
            onChange={(event) => {
              changeValue(event.target.value, event.target.name);
            }}
          />
        </label>
      </Form.Field>
      <Form.Field>
        <label>
          Confirmer votre mot de passe
          <Input
            type="password"
            name="confirmedPassword"
            placeholder="Confirmer votre mot de passe"
            value={signIn.confirmedPassword}
            onChange={(event) => {
              changeValue(event.target.value, event.target.name);
            }}
          />
        </label>
      </Form.Field>
      <Form.Field>
        <label>
          <Checkbox
            label="J'accepte de respecter la charte du site"
            required="required"
            onChange={() => {
              changeCheckbox();
            }}
          />
        </label>
      </Form.Field>
      <Button
        disabled={!signIn.checkbox}
        className="btn"
        type="submit"
      >
        Je m'inscris
      </Button>
    </Form>
  </SignInStyled>

);

SignIn.propTypes = {
  signIn: PropTypes.shape({
    email: PropTypes.string.isRequired,
    pseudo: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    confirmedPassword: PropTypes.string.isRequired,
    checkbox: PropTypes.bool.isRequired,
  }).isRequired,
  changeValue: PropTypes.func.isRequired,
  changeCheckbox: PropTypes.func.isRequired,
  signInUser: PropTypes.func.isRequired,
};

export default SignIn;
