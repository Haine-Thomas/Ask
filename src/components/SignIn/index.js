/* eslint-disable import/no-unresolved */
// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import Recaptcha from 'react-recaptcha';
import { NavLink } from 'react-router-dom';
// import du frameworks
import {
  Input,
  Form,
  Checkbox,
  Button,
  Icon,
  Label,
  Modal,
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
  verifyCallback,
  expiredCallback,
  open,
  toggleOpenModal,
}) => (
  <SignInStyled>
    <div className="gohome">
      <NavLink
        exact
        to="/"
        className="btnhome"
      >
        <Icon name="reply" />
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
      <Recaptcha
        sitekey="6LccPeQUAAAAAKHq9MPvIR7qo3SVjfEfifN6OKPI"
        render="explicit"
        verifyCallback={verifyCallback}
        expiredCallback={expiredCallback}
      />
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
        <Modal
          trigger={(
            <Button
              open={open}
              className="btn-charte"
              onClick={() => {
                toggleOpenModal();
              }}
            >
              charte
            </Button>
              )}
          size="medium"
          centered={true}
          closeIcon
          open={open}
          onClose={toggleOpenModal}
        >
          <Modal.Header>Charte du site</Modal.Header>
          <Modal.Content>
            <h1>Conditions d’utilisation du site</h1>
            <h2 className="subtitle">Généralités</h2>
            <p>Nous rappelons que l'auteur d'un message est responsable des propos qu'il publie. En cas de manquement grave à la charte ou des lois et règlements en vigueur en France, ce dernier s'expose à une suppression de ses messages, voire de son compte, ainsi qu'aux sanctions civiles ou pénales afférentes.</p>
            <p>ASK.fr ne peut être tenu pour responsable quant à l'agissement de certains membres sur le site. Si vous trouvez des messages hors-charte vous pouvez nous les signaler via le formulaire de contact.</p>
            <p>En participant aux site de ASK.fr, vous autorisez les administrateurs et les modérateurs du site à supprimer ou verrouiller n'importe quel message pour n'importe quelles raisons notamment exposées dans cette charte, sans autorisation préalable de votre part.</p>
            <h2 className="subtitle">Contenus non autorisés</h2>
            <p>- Les messages à caractères pornographique et pédopornographique.</p>
            <p>- Les messages racistes, xénophobes, révisionnistes, faisant l'apologie de crime de guerre, discriminant ou incitant à la haine qu’elle soit à l'encontre d'une personne, d'un groupe de personnes en raison de leurs origines, leur ethnie, leurs croyances ou leur mode de vie.</p>
            <p>- Les messages à caractère insultants, violents, menaçants, au contenu choquant ou portant atteinte à la dignité humaine.</p>
            <p>- Les messages diffamatoires.</p>
            <p>- Les messages bafouant le droit d'auteur, le droit à l'image et le respect à la vie privée.</p>
            <p>- Les messages dans le but de nuire au forum tel que le spam ou bien ceux générant une mauvaise ambiance ou un mauvais esprit.</p>
            <p>- Les liens de parrainages et les publicités, qu'elles soient commerciales ou non. La mention de professionnel (ex : courtier) peut-être indiqué dans les messages, mais aucun lien ou caractère promotionnel ne peut être inséré.</p>
            <p>- Les démarchages, de manière générale, sont interdits et peuvent conduire à la suppression du compte.</p>
            <p>- Et de manière plus générale, tous les messages contraires aux lois en vigueur en France.</p>
            <h1>Bonnes pratiques</h1>
            <p>Afin que les forums restent un endroit agréable à consulter, merci de suivre les bonnes pratiques ci-dessous.</p>
            <h2 className="subtitle">Utilisez la fonction "Rechercher" du Forum</h2>
            <p>Avant de poster un message, vérifiez d'abord si l'on n'a pas déjà répondu à votre question sur un autre sujet, ou si le sujet n'a pas déjà été abordé. Vous trouverez sur le site un moteur de recherche qui facilitera vos investigations.</p>
            <h2 className="subtitle">Evitez les majuscules</h2>
            <p>Les majuscules sur les sites sont considérées comme un cri, ou un signe d'énervement. Donc même si vous pensez que ça rendra votre sujet plus visible, évitez les majuscules. Vous allez paraître énervé et vous n'allez pas encourager les autres à participer à votre discussion.</p>
            <h2 className="subtitle">Evitez le langage SMS</h2>
            <p>Vous êtes sur un site, vous n'êtes pas limité en nombre de caractères. Essayez de formuler vos posts en français correct de manière à vous faire comprendre du plus grand nombre.</p>
            <h2 className="subtitle">Bien choisir le titre de la question</h2>
            <p>Pour obtenir une aide efficace et rapide facilitez la démarche aux éventuelles réponses. Pensez à rédiger une question explicite. Une question explicite permettra aux personnes qui peuvent vous répondre de ne pas passer à côté de votre question, et aussi de servir aux prochains recherchant une question similaire , grâce au moteur de recherche du site.</p>
            <h2 className="subtitle">Bien décrire le problème</h2>
            <p>Lors de la rédaction de la question, pensez à donner tous les détails pour que l'on puisse vous répondre plus précisement.</p>
            <h2 className="subtitle">Un peu de politesse</h2>
            <p>Si vous voulez encourager les autres à vous répondre, ne négligez pas les formules de politesse. Ce n'est pas parce que vous êtes sur un site qu'il faut oublier que vous parlez à des gens que vous ne connaissez pas. Un simple "bonjour", "s'il vous plaît et "Merci" ne coûte rien et bien au contraire encouragera les autres à répondre.</p>
            <h2 className="subtitle">Gardez votre calme</h2>
            <p>Si par exemple on ne répond pas à votre question, ou que la réponse est erronée vérifiez d'abord que vous avez bien décrit la question. Lors d'une discussion, essayez de ne pas trop vous emporter, critiquez les arguments, et n'attaquez pas la personne. Soyez constructifs. En cas de provocation, le compte de l’internaute pourra être supprimé. Respectez toujours les autres membres si vous voulez être respecté en retour.</p>
            <h2 className="subtitle">Informations personnelles</h2>
            <p>Hormis les informations de votre profil, ne donnez jamais d'informations pouvant vous causer préjudice (numéros de CB, numéro de carte d’identité…). Si quelqu'un divulguait ces informations sans votre accord, vous êtes en droit de demander la suppression immédiate du message.</p>
          </Modal.Content>
          <Modal.Actions>
            <Button
              labelPosition="right"
              content="fermer"
              onClick={toggleOpenModal}
            />
          </Modal.Actions>
        </Modal>

      </Form.Field>
      <Button
        disabled={(!signIn.checkbox || !signIn.isVerified)}
        className="button"
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
    isVerified: PropTypes.bool.isRequired,
  }).isRequired,
  changeValue: PropTypes.func.isRequired,
  changeCheckbox: PropTypes.func.isRequired,
  fetchSignInUser: PropTypes.func.isRequired,
  verifyCallback: PropTypes.func.isRequired,
  expiredCallback: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  toggleOpenModal: PropTypes.func.isRequired,
};

// == Export
export default SignIn;
