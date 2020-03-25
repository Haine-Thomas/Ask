// == Import locaux
import styled from 'styled-components';

// == Composant
// ici on a la fonction qui décrit le style du composant counter
const Counterstyled = styled.div`
  text-align: center;
  background-color: #1B4965;

  .icon-top {
    &:hover {
      transform: translateY(-5px);
      color: #CAE9FF;
      padding-top: -10px;
    }
  }

  .value-score {
    color: #fff;
    font-size: 1.5rem;
  }

  .icon-bottom {
    &:hover {
      transform: translateY(5px);
      color: #CAE9FF;
      padding-bottom: -10px;
    }
  }
`;

// == Export
export default Counterstyled;
