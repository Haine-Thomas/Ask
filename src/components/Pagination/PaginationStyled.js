// == Import locaux
import styled from 'styled-components';

// == Composant
// ici on a la fonction qui décrit le style du composant questionsPage
const PaginationStyled = styled.div`
display:flex;

  .page-item {
  display: inline-block;
  background-color:white;
  border: 1px solid lightgrey;
  border-radius: 5px;
}

.page-item a {
  color: black;
  float: left;
  padding: 8px 16px;
  text-decoration: none;
}

.page-item a:active {
  background-color: #e79f51;
  color: white;
  border-radius: 5px;
}

.page-item a:hover:not(.active) {
  background-color: #e79f51;
  color: white;
  border-radius: 5px;
}

`;

// == Export
export default PaginationStyled;
