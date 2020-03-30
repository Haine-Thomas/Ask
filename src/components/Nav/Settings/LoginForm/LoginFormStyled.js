// == Import locaux
import styled from 'styled-components';

// == Composant
// ici on a la fonction qui décrit le style du composant LoginFormPage
const LoginFormStyled = styled.div`
  width: 20%;
  height: auto;
  background-color: white;
  color: white;
  text-align: center;
  position: absolute;
  padding: 1rem;

  div.input {
    margin-top: 0.5rem;
  } 

  @media (max-width: 700px) {
    
    width: 100%;
    text-align: center;
  }
`;

// == Export
export default LoginFormStyled;
