// == Import locaux
import styled from 'styled-components';

// == Composant
// ici on a la fonction qui décrit le style du composant Settings
const SettingsStyled = styled.div`
width: 40%;
text-align: right;

@media (max-width: 700px) {
    
  width: 100%;
  text-align: center;
}
`;

// == Export
export default SettingsStyled;
