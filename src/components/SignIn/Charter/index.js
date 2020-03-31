/* eslint-disable import/no-unresolved*/
// == Import : npm
import React { useEffect } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import {
  Button,
  Modal,
} from 'semantic-ui-react';
// import du frameworks

// == Import : npm locaux
// import de la feuille de style associée
import CharterStyled from './CharterStyled';
import SiteCharter from './SiteCharter';
// == Composant
// ici on a la fonction qui renvoi le formulaire de structure de signin
const Charter = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
  <CharterStyled>
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>la charte du site</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <SiteCharter />
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary">Fermer</Button>
      </Modal.Footer>
    </Modal>
  </CharterStyled>
);
}
// == Export
export default Charter;

//<NavLink exact to="/SiteCharter">la charte du site</NavLink>

