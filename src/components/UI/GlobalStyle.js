import {createGlobalStyle} from "styled-components";


const GlobalStyle = createGlobalStyle`
  
body{
  transition: linear 0.25s;
  color:${props => props.theme.primaryColors};
  background-color:${props => props.theme.backgroundColor} ;
  font-family: ${(props) => props.theme.secondFont};
  width: 100%;
  height: 100vh;
  
}
 
 
h1, h2,h3,h4,h5,{
  letter-spacing: 2px;
}
h1{
  font-size: 4.5rem;
}
h3{
  font-size: 2rem;
}


`;
export default GlobalStyle