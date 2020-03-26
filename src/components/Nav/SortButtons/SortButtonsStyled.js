// == Import locaux
import styled from 'styled-components';

// == Composant
// ici on a la fonction qui décrit le style du composant SortButtonsPage
const SortButtonsStyled = styled.div`
  font-size: 1rem;
  width: 99%;
  margin-top: 2rem;
  margin-bottom: 1rem;

  button {
    border: 0;
    padding: 1rem 0;
    box-sizing: border-box;
    background-color: white;
    width: 50%;
    font-family: 'Exo', serif;
    color: #1B4965;
    font-size: 1.5rem;
    font-weight: bold;

    &.active-btn {
      border-bottom: 2px solid #1B4965;
      background-color: #E2DDD7;
    }
  }
`;

// == Export
export default SortButtonsStyled;
