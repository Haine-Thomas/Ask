// == Import npm
import React from 'react';
import { Input, Form } from 'semantic-ui-react';
import { Autocomplete } from '@material-ui/lab';
import { TextField } from '@material-ui/core';
import PropTypes from 'prop-types';

// import du composant styled du footer
import SearchBarStyled from './SearchBarStyled';
import QuestionStyled from '../../QuestionsPage/Question/QuestionStyled';
// == Composant
// ici on a la fonction qui renvoi le formulaire de structure de searchbar
const SearchBar = ({ value, changeSearchValue, searchQuestion }) => (
  <SearchBarStyled>
    <Form>
      <Input
        className="searchbar"
        icon="search"
        type="text"
        placeholder="Recherche..."
        onChange={(event, newValue) => changeSearchValue(newValue)}
      />
    </Form>
  </SearchBarStyled>
);

SearchBar.propTypes = {
  questions: PropTypes.array.isRequired,
  changeSearchValue: PropTypes.func.isRequired,
};

// == Export
export default SearchBar;
