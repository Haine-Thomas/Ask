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
  width: 60%;
  text-align: left;
  flex-direction: column;
}

.answer-container {
  width: 100%;
  text-align: right;
  display: flex;

  .answer-number {
    font-size: 0.8rem;
    padding: .5rem;
  }
  
}

.panswer {
  display: flex;
  margin-top: 1rem;
  background-color: #fff;
}

.answerText {
  text-align: left;
  width: 100%;

  .content-text {
    margin: 3.5rem 0 0.8rem 0;
  }
}

.userButton {
  display: flex;
  flex-direction: column;
  text-align: right;
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
