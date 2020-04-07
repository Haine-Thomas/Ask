// == Import locaux
import styled from 'styled-components';

// == Composant
// ici on a la fonction qui décrit le style du composant Footer
const FooterStyled = styled.footer`
  left: 1rem;
  padding: 3rem 0;
  background-color: #121113;
  margin: 0;

  .footer-container {
    display: flex;
    justify-content: space-between; 
    width: 1080px;
    margin: 0 auto;
  }

  .links {
    width: 45%;
    line-height: 1.3rem;

    .button {
      background-color: transparent;
      color: #fff; 
      padding: 0;
      
      &:hover {
        color: #E76F51;
      }
    }
  }

  .title {
    font-size: 1.5rem;
    padding: 0 0 1rem 0; 

    h3 {
      padding-bottom: .3rem;
    }

    &:hover {
      color: #E9C46A;
    }

    .separator {
      border-bottom: 3px solid #E9C46A;
    }
  }

  .contact {
    line-height: 1.3rem;
    width: 45%;
  }

  @media (min-width: 0px) and (max-width: 1080px) {
    .footer-container {
      width: 90%;
      flex-direction: column;
    }

    .contact {
      width: 100%;
      margin-bottom: 2rem;
    }

    .links {
      width: 100%;
    }
  }
`;

// == Export
export default FooterStyled;
