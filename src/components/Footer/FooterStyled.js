// == Import locaux
import styled from 'styled-components';

// == Composant
// ici on a la fonction qui décrit le style du composant FooterPage
const FooterStyled = styled.footer`
  background-color: #121113;
  padding: 1rem;

  .ui.form {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  .ui.button {
    &:hover {
        background-color: #fff;
        border: 1px solid #E76F51;
        color: #E76F51;
      }
  }
`;

// == Export
export default FooterStyled;
