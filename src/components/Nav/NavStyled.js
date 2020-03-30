// == Import locaux
import styled from 'styled-components';

// == Composant
// ici on a la fonction qui décrit le style du composant NavPage
const NavStyled = styled.div`
  padding: 0.5rem;
  background-color: white;

  .nav-container {
    display: flex;
    justify-content: space-around; 
    max-width: 1080px;
    margin: 0 auto;
    position: relative;
  }

  .btn-nav {
    padding: .73rem;
    margin: 0 .3rem;
    width: 45%;
    box-sizing: border-box;
    background-color: white;
    border: 1px solid #dfe6e9;
    border-radius: 3px;
    color: #1B4965;

    &:hover {
      border: 1px solid #1B4965;
    }

    a {
      width: 100%;
      height: 100%;
    }
  }

  @media (max-width: 700px) {
    
    .nav-container {
      flex-direction: column;
      width: 100%;

      .btn-nav {
        width: 100%;
        margin-top .5rem;

      }
    }
  }
`;

// == Export
export default NavStyled;
