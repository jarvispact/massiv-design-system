import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    html, input {
        box-sizing: border-box;
    }

    body, h1, h2, h3, h4, h5, h6, p, ol, ul {
        margin: 0;
        padding: 0;
        font-weight: normal;
        display: inline-block;
    }

    ol, ul {
        list-style: none;
    }

    a {
        text-decoration: none;
    }

    img {
        max-width: 100%;
        height: auto;
    }

    input, select, textarea, button {
        font-family: inherit;
    }
`;

export default GlobalStyle;
