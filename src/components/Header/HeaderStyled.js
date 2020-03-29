// == Import locaux
import styled from 'styled-components';

// == Composant
// ici on a la fonction qui décrit le style du composant HeaderPage
const HeaderStyled = styled.header`
  font-family: 'Yeseva One', cursive;
  text-align: center;
  left: 1rem;
  padding: 3rem 0;
  color: #fff;
  background-color: #121113;
  width: 100%;

  span {
    font-size: 2rem;
    padding-right: 10px;

    @media (max-width: 700px) {
      padding-bottom: 10px;
      padding-right: 0px;
      display:block;
      }
  }

  .title {
    font-size: 4rem;
    text-shadow: 2px 2px 2px black;

    h1 {
      display: inline-block;
      padding-bottom: 0.3rem;
      border-bottom: 3px solid #ED412A;

      &:hover {
        color: #ED412A;
      }
  }
`;

// == Export
export default HeaderStyled;
