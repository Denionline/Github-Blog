import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    a{
        text-decoration: none;
    }

    body{
        background: ${props => props.theme['base-background']};
    }

    body, button, input, textarea{
        font: 400 1rem "Nunito", system-ui;
        font-optical-sizing: auto;
        line-height: 160%;
    }
`