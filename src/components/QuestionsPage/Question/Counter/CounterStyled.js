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
      color: #E76F51;
    }
  }

  .icon-top-voted {
    color: #E76F51;
    transform: translateY(-5px);
  }

  .value-score {
    font-size: 1.2rem;
    padding-right:3px;
    color: #E76F51;
  }

  .icon-bottom {
    color: #B8B8B8;

    &:hover {
      transform: translateY(5px);
      color: #E76F51;
    }
  }

  .icon-bottom-voted {
    color: #E76F51;
    transform: translateY(5px);
  }
`;

// == Export
export default Counterstyled;
