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
    margin: 1rem;
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 2rem;
  }

  .gohome {
    margin: 4rem 0;
    font-size: 1.5rem;
    font-weight: bold;
  }
  .btnhome:hover {
    color: #5FA8D3;
  }

  .label {
    margin: 1rem 0;
  }

  .input {
    margin-top: 1rem;
  }

  .button {
    width: 100%;
    background-color: #1B4965; 
  }

`;

// == Export
export default SignInStyled;
