// == Import locaux
import styled from 'styled-components';

// == Composant
// ici on a la fonction qui décrit le style du composant counter
const Counterstyled = styled.div`
  text-align: center;

  .icon-top {
    color: #B8B8B8;

    &:hover {
      transform: translateY(-5px);
      color: #ED412A;
    }
  }

  .icon-top-voted {
    color: #ED412A;
    transform: translateY(-5px);
  }

  .value-score {
    font-size: 1.2rem;
    padding-right:3px;
    color: #ED412A;
  }

  .icon-bottom {
    color: #B8B8B8;

    &:hover {
      transform: translateY(5px);
      color: #ED412A;
    }
  }

  .icon-bottom-voted {
    color: #ED412A;
    transform: translateY(5px);
  }
`;

// == Export
export default Counterstyled;
