// == Import locaux
import styled from 'styled-components';

// == Composant
// ici on a la fonction qui décrit le style du composant question
const QuestionStyled = styled.div`
  margin: 0rem 0rem 1rem;
  width: 99%;
  box-shadow: 1px 1px 4px 0px black;
  border: 1px solid #1B4965;
  background-color: #fff;

  .question-container {
    display: flex;
    padding-left: 0.5px;
  }


  .question {
    padding: 0.6rem 0rem .8rem;
    color: black;
    font-size: 1.2rem;
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
      display:inline-block;
      font-size: 1rem;
    }
  }

  .separator {
    width: 150px;
    border-top: 1px solid #5FA8D3;
    padding: 0rem 0rem;
  }

  .answer-number {
    color: black;
    font-size: .8rem;
    padding: .5rem 0rem;
    }
`;

// == Export
export default QuestionStyled;
