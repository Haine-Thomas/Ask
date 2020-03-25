// == Import locaux
import styled from 'styled-components';

// == Composant
// ici on a la fonction qui décrit le style du composant HeaderPage
const HeaderStyled = styled.header`
  font-family: 'Vollkorn', sans-serif;
  text-align: center;
  left: 1rem;
  padding: 3rem 0;
  color: #fff;
  background-color: #1B4965;

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
    font-weight: bold;

    h1 {
      display: inline-block;
      &:hover {
        color: #CAE9FF;
      }
  }
`;

// == Export
export default HeaderStyled;
