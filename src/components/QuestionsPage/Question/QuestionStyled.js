// == Import locaux
import styled from 'styled-components';

// == Composant
// ici on a la fonction qui décrit le style du composant question
const QuestionStyled = styled.div`
  display: flex;
  margin: .5rem 0rem;
  width: 99%;
  box-shadow: 2px 2px 5px 0px rgba(27,73,101,1);
  border-radius: 3px;
  background-color: #629bd9;


  .question {
    font-size: 1.1rem;
    padding: 1rem 0.2rem;
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
export default QuestionStyled;
