import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *, body {
        margin: 0px;
        padding: 0px;
        font-size: 18px;
        font-family: 'Open Sans', sans-serif;
        font-style: normal;
        font-weight: 300;
        color: #FFF;
        user-select: none;
        box-sizing: border-box;
    }

    body {
        background-color: #1E192C;
    }
`;