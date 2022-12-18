import styled, { css } from "styled-components";

export const AvatarContent = styled.div`
    width: 41px;
    height: 41px;
    border: 3px solid #FFF;
    border-radius: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    ${({width}) => (width !== "") && css`
        width: ${width};
    `}

    ${({height}) => (height !== "") && css`
        height: ${height};
    `}
`;

export const AvatarImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 100%;
`;

export const BarraFundo = styled.div`
    width: 150px;
    height: 9px;
    margin-left: 10px;
    border-radius: 5px;
    background-color: #FFF;

    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;
`;

export const BarraInterna = styled.div`
    width: 0%;
    height: 100%;
    border-radius: 5px;
    background-color: #23DD7A;
    
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;

    ${({percent}) => (percent !== "") && css`
        width: ${percent}%;
    `}
`;