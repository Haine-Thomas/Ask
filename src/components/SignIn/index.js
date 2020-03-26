/* eslint-disable import/no-unresolved */
// == Import : npm
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

// == Import : npm locaux
// import de la feuille de style associée
import SignInStyled from './SignInStyled';

// == Composant
// ici on a la fonction qui renvoi le formulaire de structure de signin
const SignIn = ({
  signIn,
  changeValue,
  fetchSignInUser,
  changeCheckbox,
}) => (
  <SignInStyled>
    <div className="gohome">
      <NavLink
        exact
        to="/"
        className="btnhome"
      >
        Retour à l'Accueil
      </NavLink>
    </div>
    <h1 className="title">INSCRIPTION</h1>
    <Form onSubmit={(event) => {
      event.preventDefault();
      fetchSignInUser();
    }}
    >
      <Form.Field>
        <label>
          Pseudo
          <Input
            type="text"
            name="name"
            placeholder="Pseudo"
            required
            value={signIn.name}
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
            required
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
            required
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
            required
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
            required
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
    name: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    confirmedPassword: PropTypes.string.isRequired,
    checkbox: PropTypes.bool.isRequired,
  }).isRequired,
  changeValue: PropTypes.func.isRequired,
  changeCheckbox: PropTypes.func.isRequired,
  fetchSignInUser: PropTypes.func.isRequired,
};

// == Export
export default SignIn;
