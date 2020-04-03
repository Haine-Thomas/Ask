/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable camelcase */
/* eslint-disable import/no-unresolved */
// == Import npm
import React, { useEffect } from 'react';
import { Redirect, NavLink } from 'react-router-dom';
import Moment from 'react-moment';
import PropTypes from 'prop-types';
import {
  Button,
  Icon,
  Modal,
  Form,
  Input,
} from 'semantic-ui-react';

// import de la route de navigation

// import du frameworks
import Question from 'src/containers/QuestionsPage/Question';
// import du composant styled du profil page
import ProfilPageStyled from './ProfilPageStyled';

// == Composant
// ici on a la fonction qui renvoi le formulaire de structure de profilpage
const ProfilPage = ({
  pseudo,
  email,
  created_at,
  userId,
  questions,
  changeValue,
  signIn,
  deleteUser,
  disconnectAction,
  modifyUser,
  open,
  toggleOpenModal,
}) => {
  return (
    <ProfilPageStyled>
      {pseudo && (
        <>
          <article className="questions">
            <h1 className="titles">Mes question</h1>
            {questions.map((question) => (
              question.author.id === userId && (
                <div className="question">
                  <Question key={question.id} {...question} />
                </div>
              )
            ))}
          </article>
          <aside className="profil">
            <h1 className="titles">Mon profil</h1>
            <div className="profil_content">
              <NavLink
                className="return"
                exact
                to="/"
              >
                <Icon name="reply" />Retour à l'Accueil
              </NavLink>
              <p>Ma fiche utilisateur:</p>
              <p><Icon name="user circle" color="olive" />{pseudo}</p>
              <p className="profil_email"><Icon color="olive" name="envelope" />{email}</p>
              <p>
                <Icon color="olive" name="calendar check" />
                Inscrit depuis le:
              </p>
              <p><Moment locale="fr" format="DD-MM-YYYY">{created_at}</Moment></p>
              <Modal
                trigger={(
                  <Button
                    open={open}
                    onClick={() => {
                      toggleOpenModal();
                    }}
                    className="btn"
                  ><Icon name="edit" /> Modifier
                  </Button>
              )}
                size="tiny"
                closeIcon
                open={open}
                onClose={toggleOpenModal}
              >
                <Modal.Header>Modification</Modal.Header>
                <Modal.Content>
                  <Form>
                    <p className="title_modale_modify"><Icon name="user circle" />{pseudo}</p>
                    <Form.Field>
                      <label>
                        Modifier votre email
                        <Input
                          icon="at"
                          type="text"
                          name="email"
                          placeholder={email}
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
                        Modifier votre mot de passe
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
                  </Form>
                </Modal.Content>
                <Modal.Actions>
                  <Button
                    basic
                    color="green"
                    labelPosition="right"
                    icon="checkmark"
                    content="Valider"
                    onClick={() => {
                      modifyUser();
                      toggleOpenModal();
                    }}
                  />
                  <Button
                    basic
                    color="red"
                    onClick={toggleOpenModal}
                  >
                    Annuler
                  </Button>
                </Modal.Actions>
              </Modal>

              <Modal
                trigger={(
                  <Button
                    className="btn"
                  >
                    <Icon name="trash alternate outline" />Se désinscrire
                  </Button>
                )}
                size="mini"
                closeIcon
              >
                <Modal.Header>Se désinscrire</Modal.Header>
                <Modal.Content>
                  <p>Supprimer mon compte ?</p>
                </Modal.Content>
                <Modal.Actions>
                  <Button
                    basic
                    color="green"
                    labelPosition="right"
                    icon="checkmark"
                    content="Valider"
                    onClick={() => {
                      deleteUser();
                      disconnectAction();
                    }}
                  />
                </Modal.Actions>
              </Modal>
            </div>
          </aside>
        </>
      )}
      {!pseudo && (
        <Redirect to="/" />
      )}
    </ProfilPageStyled>
  );
};
ProfilPage.propTypes = {
  open: PropTypes.bool.isRequired,
  toggleOpenModal: PropTypes.func.isRequired,
  disconnectAction: PropTypes.func.isRequired,
  pseudo: PropTypes.string,
  email: PropTypes.string,
  created_at: PropTypes.string,
  questions: PropTypes.array.isRequired,
  userId: PropTypes.number,
  changeValue: PropTypes.func.isRequired,
  signIn: PropTypes.shape({
    email: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    confirmedPassword: PropTypes.string.isRequired,
    checkbox: PropTypes.bool.isRequired,
  }).isRequired,
  deleteUser: PropTypes.func.isRequired,
  modifyUser: PropTypes.func.isRequired,
};

ProfilPage.defaultProps = {
  pseudo: '',
  email: '',
  created_at: '',
  userId: '',

};

// == Export
export default ProfilPage;
