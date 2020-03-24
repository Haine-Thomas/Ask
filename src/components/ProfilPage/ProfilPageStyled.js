import styled from 'styled-components';

const ProfilPageStyled = styled.div`
  border: 1px solid white;
  width: 70%;
  display: block;
  padding: 1rem;
  margin: auto;
  text-align: center;

  .title {
    /*text-align: center;*/
   /* margin: 1rem;*/
  }

  .subtitle {
    /*text-align: center;*/
    /*margin: 1rem;*/
  }

  .btnModify {
    text-decoration: underline;
    letter-spacing: .3rem;
  }

  .btnModify:hover {
    color: darkblue;
  }
`;

export default ProfilPageStyled;
