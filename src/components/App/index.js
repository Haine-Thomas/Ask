// == Import npm
import React, { useEffect } from 'react';
// import de router-dom afin d'entourer les composants
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

// == Import locaux
import Header from 'src/components/Header';
import Nav from 'src/components/Nav';
import QuestionsPage from 'src/containers/QuestionsPage';
import Footer from 'src/components/Footer';
import SignIn from 'src/containers/SignIn';
import AnswersPage from 'src/components/AnswersPage';

import theme from 'src/assets/styles/theme';
import AppStyled from './AppStyled';


// == Composant
const App = ({ fetchQuestions }) => {
  useEffect(fetchQuestions, []);
  return (
    <AppStyled theme={theme}>
      <Header />
      <Switch>
        <Route key="3" path="/Answer">
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
};
// == Export
export default App;