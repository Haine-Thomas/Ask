// == Import locaux
import styled from 'styled-components';

// == Composant
// ici on a la fonction qui décrit le style du composant Nav
const NavStyled = styled.div`
  padding: 1rem;
  background-color: #fff;
  font-weight: 500; 

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
    border: 1px solid #121113;
    border-radius: 3px;
    color: #121113;

    &:hover {
      border: 1px solid #E76F51;
    }

    a {
      width: 100%;
      height: 100%;
    }
  }

  @media (max-width: 700px) {
    
    .nav-container {
      flex-direction: column-reverse;
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
