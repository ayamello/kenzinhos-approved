import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
        --title-font: 'Source Code Pro';
        --body-font: 'Source Sans Pro';
        --blue-color: rgba(29,100,203,1);
    }

    body, input, button{
       font-family: var(--body-font);
    }

    h1, h2, h3, h4, h5, h6{
        font-family: var(--title-font);
    }

    a {
        text-decoration: none;
    }

    button {
        cursor: pointer;
    }
`;

export default GlobalStyle;