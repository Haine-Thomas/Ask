// == Import locaux
import styled from 'styled-components';

// == Composant
// ici on a la fonction qui décrit le style du composant questionsPage
const PaginationStyled = styled.div`
display:flex;

  li {
  display: inline-block;
  background-color:white;
  border: 1px solid lightgrey;
  border-radius: 5px;
  color:black;
  &.active {
    background-color: #e79f51;
    color: white;
    border-radius: 5px; 
  }
  a:hover{
    color:white;
    font-size: 1.5em;
  }
}

li a {
  float: left;
  padding: 8px 16px;
  text-decoration: none;
}

li:hover:not(.active) {
  background-color: #e79f51;
  color: white;
  border-radius: 5px;
  a{
    color: white;
  }
}

`;

// == Export
export default PaginationStyled;
