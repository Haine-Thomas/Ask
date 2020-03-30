// == Import locaux
import styled from 'styled-components';

// == Composant
// ici on a la fonction qui décrit le style du composant LoginFormPage
const LoginFormStyled = styled.div`
  width: 39%;
  height: auto;
  background-color: #fff;
  text-align: center;
  position: absolute;
  padding: 1rem;
  border: 1px solid #F0F0F0;

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
