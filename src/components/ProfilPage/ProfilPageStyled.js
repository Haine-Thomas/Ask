// == Import locaux
import styled from 'styled-components';

// == Composant
// ici on a la fonction qui décrit le style du composant ProfilPage
const ProfilPageStyled = styled.div`
  color: black;
  display: flex;
  width: 100vw;
  line-height: 3;
  padding: 1rem;
  


  .titles {
    font-size: 1.5rem;
    text-decoration: underline grey;
  }
  .avatar {
    
  }

  .profil {
    width: 30%;
    height: 100%;
    border-right: 1px solid black;
    padding: 0 1rem;
  }

  .profil_name {
    margin: 1rem;
  }

  .questions {
    width: 70%;
    height: 100%;
    padding: 0 1rem;
  }

  .unsubscribe {
    text-decoration: underline;
  }
`;

// == Export
export default ProfilPageStyled;
