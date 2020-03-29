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
      color: #CAE9FF;
    }
  }

  .icon-top-voted {
    color: #1B4965;
  }

  .value-score {
    font-size: 1rem;
    padding-right:3px;
    color: #1B4965;
  }

  .icon-bottom {
    color: #B8B8B8;

    &:hover {
      transform: translateY(5px);
      color: #CAE9FF;
    }
  }

  .icon-bottom-voted {
    color: #1B4965;
  }
`;

// == Export
export default Counterstyled;
