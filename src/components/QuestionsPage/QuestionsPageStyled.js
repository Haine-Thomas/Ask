// == Import locaux
import styled from 'styled-components';

// == Composant
// ici on a la fonction qui décrit le style du composant questionsPage
const QuestionsPageStyled = styled.main`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-around;
  width: 1080px;
  min-height: 70vh;
  margin: 0 auto;

  .container-list-question {
    width: 89%;
  }
  

  .question-form-container {

    width: 39%;
    text-align: center;
    position:fixed;
    right:0;
    width:24%;

    .question-form {
      background-color: #E9C46A;
      width: 100%;
      margin-top: 2rem;
      background-color: #fff;
      border-radius: 3px;
      padding-bottom: 1rem;

      h3 {
        color: #121113;
        width: 100%;
        background-color: #D0D6DE;
        padding: 1rem;
        text-align: left;
      }

      input {
        padding: 1rem;
        margin: 1rem 0;
        border: 1px solid #D0D6DE;
        width: 90%;
        backgroud-color: #fff;
        border-radius: 3px;
        &:focus {
          border: 1px solid #E76F51;
        }
      }

      select {
        padding: 1rem;
        background-color: #fff;
        border: 1px solid #D0D6DE;
        width: 60%;n
        margin-bottom: 1rem;
        border-bottom-left-radius: 3px;
        border-top-left-radius: 3px;

        &:focus {
          border: 1px solid #E76F51;
        }
      }

      button {
        padding: 1rem 1rem 1rem;
        width: 30%;
        background-color: #E76F51;
        border: 1px solid #E76F51;
        color: #fff;
        border-bottom-right-radius: 3px;
        border-top-right-radius: 3px;
        margin-top: -10px;

        &:hover {
          background-color: #fff;
          border: 1px solid #E76F51;
          color: #E76F51;
        }
      }
    }
  }

  @media (min-width: 700px) and (max-width: 1080px) {
    width: 100%;
  }

  @media (max-width: 1300px) {
    width: 96%;
    margin: 0 auto;
    flex-direction: column;

    .container-list-question {
      width: 100%;
    }

    .question-form-container {
      width: 100%;
    }
  }

  @media (min-width: 700px) and (max-width: 1900px) {
  .question-form-container {
    position:relative;
    text-align: center;
  }

  .container-list-question {
  }

  @media (min-width: 1300px) and (max-width: 1900px) {
    .question-form-container {
      width:75%;
  }
  }


`;

// == Export
export default QuestionsPageStyled;
