// == Import locaux
import styled from 'styled-components';

// == Composant
// ici on a la fonction qui décrit le style du composant SortButtons
const SortButtonsStyled = styled.div`
  font-size: 1rem;
  width: 100%;
  margin-top: 2rem;
  margin-bottom: 1rem;
  text-align: left;

  button {
    border: 0;
    padding: .93rem 0;
    background-color: #D0D6DE;
    width: 50%;
    color: #121113;
    font-size: 1rem;
    font-family: 'Quicksand', sans-serif;


    &.active-btn {
      border-bottom: 2px solid #E76F51;
      background-color: white;
    }
  }
`;

// == Export
export default SortButtonsStyled;
