// == Import locaux
import styled from 'styled-components';

const AnswersPageStyled = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1080px;
  min-height: 80vh;
  margin: 0 auto;
  text-align: left;

  .gohome {
    margin: 4rem 0;
    width: 100%;
    font-size: 1.5rem;
    font-weight: bold;
    color: #1B4965;
  }
  .btnhome {
    color: #E76F51;

    &:hover {
      color: #D8D8D8;
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
export default AnswersPageStyled;
