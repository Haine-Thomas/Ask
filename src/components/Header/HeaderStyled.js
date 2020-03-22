import styled from 'styled-components';

const HeaderStyled = styled.header`
  text-align: center;
  left: 1rem;
  padding: 2rem;
  height: 20%;

  .title {
    font-size: 4rem;
    text-shadow: 2px 2px 2px black;
    font-family: 'Permanent Marker', cursive;
  }

  .title2 {
    padding-top: 1rem;
    font-size: 1.5rem;
  }

  @media (max-width: 400px) {
    .title2 {
      font-size: 1rem;
    }
  }

`;

export default HeaderStyled;
