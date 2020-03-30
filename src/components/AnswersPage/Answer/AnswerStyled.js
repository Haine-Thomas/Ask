// == Import locaux
import styled from 'styled-components';

// == Composant
// ici on a la fonction qui décrit le style du composant question
const AnswerStyled = styled.div`
margin: 0rem 0rem 2rem;
width: 99%;
color: black;
border-radius: 3px;

/*le composant réponses */
.answersQuestion-container {
  display: flex;
  padding-left: 0.5px;
  background-color: #F8F8F8;
  width: 100%;
  text-align: left;
  flex-direction: column;
}

.answer-container {
  width: 100%;
  text-align: right;
  display: flex;
  flex-direction: row;

  .answer-number {
    font-size: 0.8rem;
    padding: .5rem;
  }
}

.panswer {
  display: flex;
  flex-direction: row;
}

.answerText {
  margin: 0 0 0 .7rem;
  text-align: left;
  width:100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
/*le composant question */
.question-container {
  display: flex;
  padding-left: 0.5px;
  background-color: #F8F8F8;
}

.text {
  margin: 0 0 0 .7rem;
  text-align: left;
  width:100%;

  &:hover {
    color: black;
  }
}

.tag-container {
  width: 100%;
  text-align: right;

  .tag {
    background-color: #1B4965;
    border-top-right-radius: 3px;
    font-weight: bold;
    padding: 0.8rem;
    display:inline-block;
    font-size: 1rem;
    color: #fff;
  }
}

.question {
  padding: 0.6rem 0rem .8rem;
  color: black;
  font-size: 1.2rem;
}

.separator {
  width: 150px;
  border-top: 1px solid #5FA8D3;
  padding: 0rem 0rem;
}

.author {
  color: black;
  font-size: .8rem;
  padding: .5rem 0rem;
  }

`;

// == Export
export default AnswerStyled;
