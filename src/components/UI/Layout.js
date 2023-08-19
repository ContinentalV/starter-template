import styled, {ThemeProvider} from "styled-components";
import GlobalStyle from "./GlobalStyle";
import mainTheme from "./themes/main.json"
import Headers from "../Headers";


const Main = styled.div` 
  width: 100%;
  height: 100%; 
`


export default function Layout({children}){

    return(
        <ThemeProvider theme={mainTheme}>
            <GlobalStyle />
            <Headers />
            <Main>
                {children}
            </Main>
        </ThemeProvider>





    )

}