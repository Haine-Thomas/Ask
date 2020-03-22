import styled from 'styled-components';


const AppStyled = styled.div`
  color: white;
  height: 100vh;
  display: flex;
  flex-direction: column;
  font-family: 'Montserrat', sans-serif;
  
  background-image: linear-gradient(top, #333b7c 0%, #476798 25%, #476798 50%, #96aacf 75%, #96aacf 100%);
background-image: -webkit-gradient(linear, left top, left bottom, color-stop(0, #333b7c), color-stop(0.25, #476798), color-stop(0.5, #476798), color-stop(0.75, #96aacf), color-stop(1, #96aacf));
background-image: -moz-linear-gradient(top, #333b7c 0%, #476798 25%, #476798 50%, #96aacf 75%, #96aacf 100%);
background-image: -o-linear-gradient(top, #333b7c 0%, #476798 25%, #476798 50%, #96aacf 75%, #96aacf 100%);
background-image: -ms-linear-gradient(top, #333b7c 0%, #476798 25%, #476798 50%, #96aacf 75%, #96aacf 100%);
  
`;

export default AppStyled;
