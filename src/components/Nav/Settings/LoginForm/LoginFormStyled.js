// == Import locaux
import styled from 'styled-components';

// == Composant
// ici on a la fonction qui décrit le style du composant LoginForm
const LoginFormStyled = styled.div`
  width: 39%;
  height: auto;
  background-color: #fff;
  text-align: center;
  position: absolute;
  padding: 1rem;
  border: 1px solid #F0F0F0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 0 auto;

  .password_link{
    color:black;
    padding:0.5em;
  }

  .password_link:hover{
    color:blue;
    font-size:1.1em;
  }

  .signin_btn {
    color:#E76F51;
    text-decoration: underline;
    margin-right: .7rem;
    font-size: .7rem;
    padding: 1rem 0 1rem;
  }
  
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
