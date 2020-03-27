// == Import locaux
import styled from 'styled-components';

// == Composant
// ici on a la fonction qui décrit le style du composant questionspage
const AnswersPageStyled = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1080px;
  margin: 0 auto;
  text-align: left;

  .gohome {
    margin: 4rem 0;
    width: 100%;
    font-size: 1.5rem;
    font-weight: bold;
    color: #1B4965;
  }
  .btnhome:hover {
    color: #5FA8D3;
  }


  @media (min-width: 700px) and (max-width: 1080px) {
    width: 100%;
  }

  @media (max-width: 700px) {
    width: 100%;
  }

`;

// == Export
export default AnswersPageStyled;
