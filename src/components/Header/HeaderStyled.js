// == Import locaux
import styled from 'styled-components';

const HeaderStyled = styled.header`
@font-face {
    font-family: 'MrRobot';
    src: url('MrRobot.woff2') format('woff2'),
        url('MrRobot.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
}

  text-align: center;
  left: 1rem;
  color:  #D0D6DE;
  background-color: #202020;
  width: 100%;
  padding: 1.4rem 0;
  vertical-align: middle;

.slogan:hover{
  color:#e9c46a
}
  h1 {
    font-size: 2rem;
    padding-right: 10px;
  }

  h1 span {
    font-family:'MrRobot';
    font-size:1.3em;
    margin-left:5px;
  }

  @media (max-width: 700px) {
    h1{
      display: none;
    }
    .logo {
      width:100px;
    }  
  }

  
`;

// == Export
export default HeaderStyled;
