// == Import npm
import React from 'react';
import { Input, Form } from 'semantic-ui-react';

// import du composant styled du footer
import SearchBarStyled from './SearchBarStyled';

// == Composant
// ici on a la fonction qui renvoi le formulaire de structure de searchbar
const SearchBar = () => (
  <SearchBarStyled>
    <Form>
      <Input
        icon="search"
        type="text"
        fluid
        placeholder="Recherche..."
        className="searchbar"
      />
    </Form>
  </SearchBarStyled>
);

// == Export
export default SearchBar;
