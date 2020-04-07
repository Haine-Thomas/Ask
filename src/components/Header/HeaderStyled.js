// == Import locaux
import styled from 'styled-components';

// == Composant
// ici on a la fonction qui décrit le style du composant Header
const HeaderStyled = styled.header`
  text-align: center;
  left: 1rem;
  color:  #D0D6DE;
  background-color: black;
  width: 100%;
  padding: 3rem 0;
  vertical-align: middle;

  img.ui.image {
    display: block;
    top: 15px;
    left: -10px;
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

  .logo {  
    width:130px;
    display: inline-block;
    padding-bottom: 0.3rem;
  }
  
`;


// == Export
export default HeaderStyled;
