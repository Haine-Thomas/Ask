import styled from 'styled-components';

const SignInStyled = styled.div`
width: 40%;
display: block;
margin: auto;
color: #E76F51;

h1 {
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 2rem;
}

.gohome {
  margin: 1rem 0 2rem 0;
  font-size: 1rem;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
    color: lightgrey;
  }
}

label {
  margin: 1rem 0 0;
}

.input {
  margin-top: 1rem;
}

.button {
  width: 100%;
  background-color: #E76F51;
  margin: 0 0 1rem 0;
}

.label-charte {
  display: inline-block
}

.btn-charte {
  background-color: transparent;
  width: auto;
  display: inline-block;
  margin: 0;
  color: #E76F51;
  padding: 0 0 0 .5rem;
  font-size: 1.1rem;

  &:hover {
    color: lightgrey;
    background-color: transparent;
  }
}

@media (max-width: 700px) {
width: 95%;
text-align: center;
}
`;
// == Export
export default SignInStyled;
