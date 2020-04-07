// == Import locaux
import styled from 'styled-components';

// == Composant
// ici on a la fonction qui décrit le style du composant ProfilPage
const ProfilPageStyled = styled.div`
  color: black;
  line-height: 3;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-around;
  width: 1080px;
  margin: auto;


  .return {
    font-size: .8rem;
    text-decoration: underline;
    color: #E76F51;
  }
  .profil {
    width: 30%;
    height: 100%;
  }
  .profil_content {
    background-color: white;
    padding: 0 .4rem 1rem .4rem;
    font-size: .9rem;
  }

  .titles {
    color: #121113;
    width: 100%;
    background-color: #D8D8D8;
    text-align: left;
    margin: 2rem 0;
    padding: .2rem;
  }
  .questions {
    width: 100%;
    height: 100%;
    padding: 0 1rem;
  }

  .unsubscribe {
    text-decoration: underline;
  }

  .btn {
    width: 40%;
    background-color: #E76F51;
    border: 1px solid #E76F51;
    color: #fff;
    border-radius: 3px;
    font-size: .7rem;
    margin: 1rem .5rem;
    text-align: center;

      &:hover {
        background-color: #fff;
        border: 1px solid #E76F51;
        color: #E76F51;
      }
  }
  @media (max-width: 700px) {
    
    flex-direction: column-reverse;
    margin: .1rem;
    width: 100vw;

    .profil {
      width: 100%;
    }
    .questions {
      width: 100%;
    }
    .profil_content {
      margin: .1rem;
    }
  }
`;
export default ProfilPageStyled;
