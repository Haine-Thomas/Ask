// == Import locaux
import styled from 'styled-components';

// == Composant
// ici on a la fonction qui décrit le style du composant questionspage
const QuestionsPageStyled = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1080px;
  margin: 0 auto;

  .question-form-container {

    width: 99%;
    
    .question-form {
      width: 100%;
      margin-top: 2rem;
      background-color: #1B4965;
      border-radius: 3px;
      padding: 1rem;
      display: flex;

      input {
        padding: 1rem;
        border: 1px solid #CAE9FF;
        width: 70%;
        backgroud-color: #fff;
        border-bottom-left-radius: 3px;
        border-top-left-radius: 3px;
        
        &:focus {
          border: 1px solid #1B4965;
        }
      }

      select {
        padding: 1rem;
        background-color: #CAE9FF;
        border: 1px solid #CAE9FF;
        width: 15%;

        &:focus {
          border: 1px solid #1B4965;
        }
      }

      button {
        width: 15%;
        border: 1px solid #CAE9FF;
        border-bottom-right-radius: 3px;
        border-top-right-radius: 3px;
        background-color: #fff;
      }
    }
  }

  @media (min-width: 700px) and (max-width: 1080px) {
    width: 100%;
  }

  @media (max-width: 700px) {
    width: 100%;
  }

`;

// == Export
export default QuestionsPageStyled;
