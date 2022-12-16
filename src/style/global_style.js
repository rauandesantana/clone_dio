import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *, body {
        margin: 0px;
        padding: 0px;
        font-size: 18px;
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        color: #FFF;
        user-select: none;
    }

    body {
        background-color: #1E192C;
    }
`;