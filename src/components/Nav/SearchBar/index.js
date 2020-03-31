// == Import npm
import React from 'react';
import { Input, Form } from 'semantic-ui-react';
import { Autocomplete } from '@material-ui/lab';
import { TextField } from '@material-ui/core';
// import du composant styled du footer
import SearchBarStyled from './SearchBarStyled';
import QuestionStyled from '../../QuestionsPage/Question/QuestionStyled';

// == Composant
// ici on a la fonction qui renvoi le formulaire de structure de searchbar
const SearchBar = ({ questions, value, changeSearchValue }) => (
  <SearchBarStyled>
    <Form
      onSubmit={(event, value) => {
        event.preventDefault();
        //méthode go page
        console.log(value);
      }}>
      <Autocomplete
        className="searchbar"
        icon="search"
        type="text"
        options={questions}
        getOptionLabel={(option) => option.content}
        onChange={(event, newValue) => changeSearchValue(newValue)}
        renderInput={(params) => <TextField {...params} label="Recherchez votre question" variant="outlined" />}
      />
    </Form>
  </SearchBarStyled>
);

// == Export
export default SearchBar;
