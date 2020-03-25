// == Import locaux
import styled from 'styled-components';

// == Composant
// ici on a la fonction qui décrit le style du composant ProfilPage
const ProfilPageStyled = styled.div`
  text-align: center;
  margin: 5rem;
  padding: 1rem;

  .title_profil {
    font-size: 2rem;
    padding: 1rem;
  }
  .profil {
    border: 1px solid white;
  }

  .question_block {
    display: flex;
    width: 70%;
    height: auto;
    border: 1px solid black;
    margin: auto;
    box-shadow: 10px 5px 5px black;
    border-radius: 3px;
    background-color: #629bd9;
  }

  .question {
    font-size: 1.1rem;
    padding: 1rem 0.2rem;
  }

  .text:hover .question {
    color: black;
  }

  .text:hover .tag {
    color: white;
  }
  

  .btn {
    height: 100%; 
  }
  /*pour que l'on voit que la question est cliquable sur toute la longueur de la céllule*/
  .text:hover .question{
    color: black;
  }
  /*pour que la question reste cliquable sur la céllule mais que seul la couleur du texte change au passage de la souris*/
  .text:hover .tag {
    color: white;
  }

  .text {
    margin: 0 0 0 .7rem;
    text-align: left;
    width:100%;
  }

  .author {
    color: black;
    font-size: .8rem;
    padding: .2rem;
  }

  .tag {
    background-color:darkblue;
    padding: 0.5rem;
    border-radius: 3px;
    display:inline-block;
    font-size: 0.7rem;

  }

`;

// == Export
export default ProfilPageStyled;
