// == Import locaux
import styled from 'styled-components';

// == Composant
// ici on a la fonction qui décrit le style du composant question
const QuestionStyled = styled.div`
  margin: .5rem 0rem;
  width: 99%;
  box-shadow: 2px 2px 5px 0px rgba(27,73,101,1);
  border-radius: 3px;
  background-color: #fff;

  .question-container {
    display: flex;
    
  }


  .question {
    padding: 0.5rem 0.5rem 1.5rem;
    color: #1B4965;
    font-size: 1.5rem;
    font-weight: bold;
  }

  .text {
    margin: 0 0 0 .7rem;
    text-align: left;
    width:100%;

    &:hover {
      color: white;
    }
  }

  .author-container {
    width: 100%;
    text-align: right;
    background-color: #1B4965;
    border-bottom-right-radius: 3px;
    border-bottom-left-radius: 3px;

    .author {
      color: white;
      font-size: 0.8rem;
      padding: .5rem;
    }
  }

  .tag-container {

    width: 100%;
    text-align: right;

    .tag {
      background-color: #5FA8D3;
      font-weight: bold;
      padding: 0.8rem;
      border-top-right-radius: 3px;
      border-bottom-left-radius: 3px;
      display:inline-block;
      font-size: 1rem;
    }


  }

`;

// == Export
export default QuestionStyled;
