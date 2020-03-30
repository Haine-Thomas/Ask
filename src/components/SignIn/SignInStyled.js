// == Import locaux
import styled from 'styled-components';

// == Composant
// ici on a la fonction qui décrit le style du composant signin
const SignInStyled = styled.div`
  width: 40%;
  display: block;
  margin: auto;
  color: #1B4965;

  h1 {
    text-align: center;
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 2rem;
  }

  .gohome {
    margin: 1rem 0 2rem 0;
    font-size: 1rem;
    font-weight: bold;
    text-decoration: underline;
  }
  .btnhome:hover {
    color: #5FA8D3;
  }

  .label {
    margin: 1rem 0 ;
  }

  .input {
    margin-top: 1rem;
  }

  .button {
    width: 100%;
    background-color: #1B4965; 
    margin-bottom: 1rem;
  }

  @media (max-width: 700px) {
    
    width: 95%;
    text-align: center;
  }

`;

// == Export
export default SignInStyled;
