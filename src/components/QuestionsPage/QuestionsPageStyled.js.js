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
    width: 100%;
    
    
    .question-form {
      background-color: #E9C46A;
      width: 100%;
      margin-top: 1rem;
      border-radius: 3px;
      padding: .1rem;
      display: flex;
      border: hidden;

      input {
        border: hidden;
        width: 70%;
        
        &:focus {
          border: 1px solid #1B4965;
        }
      }

      select {
        width: 15%;
        border: hidden;
        border-radius: O;

        &:focus {
          border: 1px solid black;
        }
      }

      button {
        width: 15%;
        border: hidden;
        background-color: white;

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
