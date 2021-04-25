import { injectGlobal } from "@emotion/css";
import { useEffect } from "react";

export const injectGlobalStyle = () => injectGlobal`
    body {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        vertical-align: baseline;
        box-sizing: border-box;
    }

    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }

    ol, ul {
        list-style: none;
    }

    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
`;

export const CssReset = () => {
    useEffect(() => {
        injectGlobalStyle();
    }, []);

    return null;
};
