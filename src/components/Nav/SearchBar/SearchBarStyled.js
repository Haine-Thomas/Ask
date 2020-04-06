// == Import locaux
import styled from 'styled-components';

// == Composant
// ici on a la fonction qui décrit le style du composant SearchBar
const SearchBarStyled = styled.div`
  width: 60%;
  margin: 0 .3rem;

  .input {
    width: 100%;

    i {
      color: #ED412A;
    }
  }

  @media (max-width: 700px) {
    width: 100%;
    margin-bottom: 10px;
  }

`;

// == Export
export default SearchBarStyled;
