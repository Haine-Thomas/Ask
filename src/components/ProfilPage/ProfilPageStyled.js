// == Import locaux
import styled from 'styled-components';

// == Composant
// ici on a la fonction qui décrit le style du composant ProfilPage
const ProfilPageStyled = styled.div`
  border: 1px solid white;
  width: 70%;
  display: block;
  padding: 1rem;
  margin: auto;
  text-align: center;

  .title {
    /*text-align: center;*/
   /* margin: 1rem;*/
  }

  .subtitle {
    /*text-align: center;*/
    /*margin: 1rem;*/
  }

  .btnModify {
    text-decoration: underline;
    letter-spacing: .3rem;
  }

  .btnModify:hover {
    color: darkblue;
  }
`;

// == Export
export default ProfilPageStyled;
