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

  .new_question_form {
    padding: 1rem;
  }

`;

// == Export
export default QuestionsPageStyled;
