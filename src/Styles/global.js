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
        --purple-color: rgba(116,29,203,.5);
        --gray-details: rgba(149,149,149,1);
        --white-color: rgba(255,255,255,1);
    }

    body, input, button{
       font-family: var(--body-font);
       background-color: #F9F9F9;
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
    h1 {
        font-family: ---title-font;
    }
`;

export default GlobalStyle;