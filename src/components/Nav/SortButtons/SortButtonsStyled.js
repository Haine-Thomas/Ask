// == Import locaux
import styled from 'styled-components';

// == Composant
// ici on a la fonction qui décrit le style du composant SortButtonsPage
const SortButtonsStyled = styled.div`
  font-size: 1rem;
  width: 99%;
  margin: 2rem 0 .2rem;

  button {
    border: 0;
    padding-bottom: 1rem;
    box-sizing: border-box;
    background-color: white;
    width: 50%;

    &.active-btn {
      border-bottom: 2px solid #1B4965;
    }
  }
`;

// == Export
export default SortButtonsStyled;
