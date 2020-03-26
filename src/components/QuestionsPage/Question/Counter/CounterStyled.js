// == Import locaux
import styled from 'styled-components';

// == Composant
// ici on a la fonction qui décrit le style du composant counter
const Counterstyled = styled.div`
  text-align: center;
  color: #1B4965;
  .icon-top {
    &:hover {
      transform: translateY(-5px);
      color: #CAE9FF;
    }
  }

  .value-score {
    font-size: 1rem;
    padding-right:3px;
  }

  .icon-bottom {
    &:hover {
      transform: translateY(5px);
      color: #CAE9FF;
    }
  }
`;

// == Export
export default Counterstyled;
