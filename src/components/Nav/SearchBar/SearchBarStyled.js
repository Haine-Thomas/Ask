// == Import locaux
import styled from 'styled-components';

// == Composant
// ici on a la fonction qui décrit le style du composant SearchBarPage
const SearchBarStyled = styled.div`
  width: 40vw;


  .searchbar {
    width: 100%;
  }

  .searchbar:focus {
    border-color: #f17f42;
  }

`;

// == Export
export default SearchBarStyled;
