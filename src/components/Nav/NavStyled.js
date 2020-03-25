// == Import locaux
import styled from 'styled-components';

// == Composant
// ici on a la fonction qui décrit le style du composant NavPage
const NavStyled = styled.div`
  display: flex;
  justify-content: space-around; 
  padding: 0.5rem;
  background-color: rgb(194,212,248);
  
  

  .btn {
    padding: .7rem;
    margin: 0 .3rem;
    background-color: white;
    border: 1px solid #dfe6e9;
    border-radius: 3px;
    color: #182C61;
  }

  @media (max-width: 400px) {
    
    .btn {
      display: flex;
      margin: .2rem;
      padding: .2rem;
    }
  }

  
  .btn:hover {
    border: 1px solid #182C61;
  }

`;

// == Export
export default NavStyled;
