// == Import locaux
import styled from 'styled-components';

// == Composant
// ici on a la fonction qui décrit le style du composant FooterPage
const FooterStyled = styled.footer`
  left: 1rem;
  padding: 3rem 0;
  background-color: #121113;
  display: flex;
  justify-content: space-around; 
  margin: 0;
  font-size: 1rem;

  /* format responsive */
  span {
    font-size: 0.5rem;
    padding-right: 10px;

    @media (max-width: 700px) {
      padding-bottom: 10px;
      padding-right: 0px;
      display:block;
      }
  }

  /* les titres et le .separator dans .contact et .links*/
  .title {
      font-size: 1.5rem;
      padding:1rem; 
      &:hover {
        color: #E9C46A;
      }
      /* ligne séparatrice */
      .separator {
        border-bottom: 3px solid #E9C46A;
        padding: 2px;
      }

  

  /* contient le .title, paragraphe, .adress, .social  */
  .contact {
    justify-content: space-between;
    }

    /* les paragraphes */
    .text {

    }

    /* contient le mail et l adresse du siege social */
    .adress {

    }

    /* contient les liens des réseaux sociaux */
    .social {
        
      /* Facebook */
      .fa {
        padding: 20px;
        font-size: 30px;
        width: 70px;
        text-align: center;
        text-decoration: none;
        .fa-facebook {
          background: #3B5998;
          color: white;
        }
      }
        
      /* Twitter */
      .fa-twitter {
        background: #55ACEE;
        color: white;
      }
    }
  }

  /* contient les liens utiles dont le titre, le separator et les mentions legales */
  .links {

    /* la modale */
    .ui.button {
      background-color: transparent;
      color: #E76F51; 
      &:hover {
        color: #E9C46A;
      }
    }
  }

`;

// == Export
export default FooterStyled;
