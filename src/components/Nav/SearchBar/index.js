// == Import npm
import React from 'react';
import { Input, Form } from 'semantic-ui-react';
import PropTypes from 'prop-types';

// import du composant styled du footer
import SearchBarStyled from './SearchBarStyled';
// == Composant
// ici on a la fonction qui renvoi le formulaire de structure de searchbar
const SearchBar = ({ changeSearchValue }) => (
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
  changeSearchValue: PropTypes.func.isRequired,
};

// == Export
export default SearchBar;
