// == Import locaux
import styled from 'styled-components';

// == Composant
// ici on a la fonction qui décrit le style du composant AnswersPage
const AnswersPageStyled = styled.div`
  width: 40%;
  display: block;
  margin: auto;

  .title {
    text-align: center;
    margin: 1rem;
  }

  .btn {
    width:100%;
  }

  .btnhome {
    text-decoration: underline;
  }

  .btnhome:hover {
    color: darkblue;
  }
`;

// == Export
export default AnswersPageStyled;
