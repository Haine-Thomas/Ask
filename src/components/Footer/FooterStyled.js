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

  span {
    font-size: 0.5rem;
    padding-right: 10px;

    @media (max-width: 700px) {
      padding-bottom: 10px;
      padding-right: 0px;
      display:block;
      }
  }

.separator {
  border-bottom: 3px solid #E9C46A;
  padding: 2px;
}

.title {
  font-size: 1.5rem;
  padding:1rem; 
  &:hover {
    color: #E9C46A;
  }
}

/* contient le paragraphe, .adress, .social  */
.contact {

}

/* contient les liens utiles dont les mentions legales */
.links {
  .ui.button {
    background-color: transparent;
    color: #E76F51; 
      &:hover {
      color: #E9C46A;
    }
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

`;

// == Export
export default FooterStyled;
