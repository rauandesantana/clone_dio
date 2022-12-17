import styled, { createGlobalStyle, css } from "styled-components";

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

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    
    display: flex;
    justify-content: center;
    align-items: flex-start;
`;

export const Row = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    flex-flow: row nowrap;

    ${({width}) => (width !== "") && css`
        width: ${width};
    `}

    ${({height}) => (height !== "") && css`
        height: ${height};
    `}

    ${({alignContent}) => (alignContent !== "") && css`
        justify-content: ${alignContent};
    `}

    ${({alignItems}) => (alignItems !== "") && css`
        align-items: ${alignItems};
    `}
`;

export const Column = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    flex-flow: column nowrap;

    ${({width}) => (width !== "") && css`
        width: ${width};
    `}

    ${({height}) => (height !== "") && css`
        height: ${height};
    `}

    ${({alignContent}) => (alignContent !== "") && css`
        justify-content: ${alignContent};
    `}

    ${({alignItems}) => (alignItems !== "") && css`
        align-items: ${alignItems};
    `}
`;