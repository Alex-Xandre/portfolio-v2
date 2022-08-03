import { createGlobalStyle } from "styled-components"
export const lightTheme ={
    body: 'white',
    fontColor:'#0e0d0d',

}
export const darkTheme ={
    body: 'black',
    fontColor:'wheat',
}

export const lighterTheme ={
    body: '#f3f7fa',
    fontColor:'#0e0d0d',
}

export const darkerTheme ={
    body: '#1f202e',
    fontColor:'wheat',
}

export const GlobalStyles = createGlobalStyle`
    body{
        background-color: ${(props) => props.theme.body}
    }
`

export const GlobalStylesAboutSection = createGlobalStyle`
    .about_section{
        background-color: ${(props) => props.theme.body}
    }
`