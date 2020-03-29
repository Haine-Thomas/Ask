// == Import locaux
import styled from 'styled-components';

// == Composant
// ici on a la fonction qui décrit le style du composant LoginFormPage
const LoginFormStyled = styled.div`
  width: 36%;
  height: auto;
  background-color: #fff;
  text-align: center;
  position: absolute;
  right: 0;
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
