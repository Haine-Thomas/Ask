// == Import locaux
import styled from 'styled-components';

// == Composant
// ici on a la fonction qui décrit le style du composant Header
const HeaderStyled = styled.header`
  text-align: center;
  left: 1rem;
  color:  #D0D6DE;
  background-color: #202020;
  width: 100%;
  padding: 1.4rem 0;
  vertical-align: middle;

.slogan:hover{
  color:#e9c46a
}
  span {
    font-size: 2rem;
    padding-right: 10px;
  }

  @media (max-width: 700px) {
    span{
      display: none;
    }
    .logo {
      width:100px;
    }  
  }

  
`;


// == Export
export default HeaderStyled;
