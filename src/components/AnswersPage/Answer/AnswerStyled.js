// == Import locaux
import styled from 'styled-components';

// == Composant
// ici on a la fonction qui décrit le style du composant question
const AnswerStyled = styled.div`
margin: 0rem 0rem 2rem;
width: 99%;
color: black;
border-radius: 3px;

.container-reponse {
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
}

p.content-text{
  width: 100%;
  word-wrap:break-word;
}

.reponse-form-container {
  width: 39%;
  margin-top: 2rem;

  h3 {
    color: #121113;
    width: 100%;
    background-color: #D8D8D8;
    padding: 1.06rem;
    text-align: left;
  }

  input {
    padding: 1.035rem;
    margin: 1rem 0;
    border: 1px solid #D8D8D8;
    width: 70%;
    backgroud-color: #fff;
    border-radius: 3px 0px 0px 3px;
    
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
    width: 100%;
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
    background-color: #E9C46A;
    font-weight: bold;
    margin-right: 3rem;
    padding: 0.8rem;
    display:inline-block;
    font-size: 0.8rem;
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
  border-top: 1px solid #E76F51;
  padding: 0rem 0rem;
}

.author {
  color: black;
  font-size: .8rem;
  padding: .5rem 0rem;
  }

.modify-icons {
  margin-bottom: .5rem;
}

@media (max-width: 1080px) {

  .container-reponse {
    width: 96%;
    margin: 0 auto;
    flex-direction: column;

    .reponse-form-container {
      width: 100%;
    }

    .answersQuestion-container {
      width: 100%;
    }
  }
}

`;

// == Export
export default AnswerStyled;
