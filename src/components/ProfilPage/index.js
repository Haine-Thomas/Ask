/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable camelcase */
/* eslint-disable import/no-unresolved */
// == Import npm
import React from 'react';
import { Redirect } from 'react-router-dom';
import Moment from 'react-moment';
import PropTypes from 'prop-types';
import {
  Button,
  Icon,
  Modal,
  Form,
  Input,
} from 'semantic-ui-react';
import Avatar from 'react-avatar';

// import de la route de navigation

// import du frameworks
import Question from 'src/components/QuestionsPage/Question';
// import du composant styled du profil page
import ProfilPageStyled from './ProfilPageStyled';

// == Composant
// ici on a la fonction qui renvoi le formulaire de structure de profilpage
const ProfilPage = ({
  pseudo,
  email,
  // eslint-disable-next-line camelcase
  created_at,
  iduser,
  questions,
  changeValue,
  password,
  signIn,
}) => (
  <ProfilPageStyled>
    {pseudo && (
      <>
        <aside className="profil">
          <h1 className="titles">Mon profil</h1>
          <p className="profil_name"><Avatar className="avatar" alt={pseudo} size="50" name={pseudo} round="50px" />{pseudo}</p>
          <p className="profil_email"><Icon name="envelope" />{email}</p>
          <p className="bbday"><Icon name="birthday cake" />JJ/MM/AAAA</p>
          <p>
            Inscrit depuis le: <Moment locale="fr" format="DD-MM-YYYY">{created_at}</Moment>
          </p>
          <Modal
            trigger={<Button>Modifier</Button>}
            size="tiny"
            closeIcon
          >
            <Modal.Header>Modification</Modal.Header>
            <Modal.Content>
              <Form>
                <p>{pseudo}</p>
                <Form.Field>
                  <label>
                    Email
                    <Input
                      icon="at"
                      type="text"
                      name="email"
                      placeholder={email}
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
              </Form>
            </Modal.Content>
            <Modal.Actions>
              <Button negative>Annuler</Button>
              <Button
                positiveicon="checkmark"
                content="Valider"
              />
            </Modal.Actions>
          </Modal>

          <Modal
            trigger={<Button>Se désinscrire</Button>}
            size="mini"
            closeIcon
          >
            <Modal.Header>Se désinscrire</Modal.Header>
            <Modal.Content>
              <p>Supprimer mon compte ?</p>
            </Modal.Content>
            <Modal.Actions>
              <Button negative>Annuler</Button>
              <Button
                positiveicon="checkmark"
                content="Valider"
              />
            </Modal.Actions>
          </Modal>
        </aside>
        <article className="questions">
          <h1 className="titles">Mes questions </h1>
          {questions.map((question) => (
            question.author.id === iduser && (
              <Question key={question.id} {...question} />
            )
          ))}
        </article>
      </>
    )}
    {!pseudo && (
      <Redirect to="/" />
    )}
  </ProfilPageStyled>
);


ProfilPage.propTypes = {
  pseudo: PropTypes.string,
  email: PropTypes.string,
  created_at: PropTypes.string,
  questions: PropTypes.array.isRequired,
  iduser: PropTypes.number,
  changeValue: PropTypes.func.isRequired,
  password: PropTypes.string.isRequired,
  signIn: PropTypes.shape({
    email: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    confirmedPassword: PropTypes.string.isRequired,
    checkbox: PropTypes.bool.isRequired,
  }).isRequired,
};

ProfilPage.defaultProps = {
  pseudo: '',
  email: '',
  created_at: '',
  iduser: '',

};

// == Export
export default ProfilPage;
