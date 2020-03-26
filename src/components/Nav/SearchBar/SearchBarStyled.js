// == Import locaux
import styled from 'styled-components';

// == Composant
// ici on a la fonction qui décrit le style du composant SearchBarPage
const SearchBarStyled = styled.div`
  width: 60%;
  margin: 0 .3rem;

  .searchbar {
    width: 100%;
  }

  .searchbar:focus {
    border-color: #1B4965;
  }

  @media (max-width: 700px) {
    width: 100%;
    margin-bottom: 10px;
  }

`;

// == Export
export default SearchBarStyled;
