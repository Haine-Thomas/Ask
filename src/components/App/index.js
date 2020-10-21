// == Import npm
import React, { useEffect } from 'react';
// import de router-dom afin d'entourer les composants
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

// == Import locaux
import Header from 'src/containers/Header';
import Nav from 'src/containers/Nav';
import QuestionsPage from 'src/containers/QuestionsPage';
import Footer from 'src/components/Footer';
import SignIn from 'src/containers/SignIn';
import AnswersPage from 'src/containers/AnswersPage';
import ProfilPage from 'src/containers/ProfilPage';
import VerifyPage from 'src/containers/VerifyPage';
import PasswordRecover from 'src/containers/PasswordRecover';
import RebootPassword from 'src/containers/RebootPassword';

import theme from 'src/assets/styles/theme';

// import de la feuille de style associée
import AppStyled from './AppStyled';


// == Composant
// ici on a la fonction qui renvoi le formulaire de structure de l application
const App = ({ fetchQuestions, fetchTags, resetPasswordRebootValue }) => {
  useEffect(fetchQuestions, []);
  useEffect(fetchTags, []);
  useEffect(resetPasswordRebootValue, []);
  return (
    <AppStyled theme={theme}>
      <Header />
      <Switch>
        <Route key="7" path="/user/:id/:secretToken/rebootPassword">
          <RebootPassword />
        </Route>
        <Route key="6" path="/user/recoverPassword">
          <PasswordRecover />
        </Route>
        <Route key="5" path="/user/verify">
          <VerifyPage />
        </Route>
        <Route key="4" path="/Profil">
          <Nav />
          <ProfilPage />
        </Route>
        <Route key="3" path="/Answer/:id">
          <Nav />
          <AnswersPage />
        </Route>
        <Route key="2" path="/signIn">
          <SignIn />
        </Route>
        <Route key="1" path="/">
          <Nav />
          <QuestionsPage />
        </Route>
      </Switch>
      <Footer />
    </AppStyled>
  );
};

App.propTypes = {
  fetchQuestions: PropTypes.func.isRequired,
  fetchTags: PropTypes.func.isRequired,
  resetPasswordRebootValue: PropTypes.func.isRequired,
};

// == Export
export default App;
