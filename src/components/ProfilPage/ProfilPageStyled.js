// == Import locaux
import styled from 'styled-components';

// == Composant
// ici on a la fonction qui décrit le style du composant ProfilPage
const ProfilPageStyled = styled.div`
  margin: 2rem;
  padding: 1rem;
  height: 80%;
  color: #1B4965;

  .profil {
    height: 30%;
    line-height: 2.5;
    font-size: 1rem;
    padding: 1rem;
  }

  .title {
    font-size: 2rem;
    padding: 1rem;

  }

  .profil_name {
    color: black;
  }

  .profil_question_block {
    display: flex;
    width: 70%;
    height: auto;
    border: 1px solid black;
    margin: auto;
    box-shadow: 10px 5px 5px black;
    border-radius: 3px;
    background-color: #629bd9;
  }
  
`;

// == Export
export default ProfilPageStyled;
