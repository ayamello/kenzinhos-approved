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

    a {
        text-decoration: none;
    }

    button {
        cursor: pointer;
    }
`;

export default GlobalStyle;