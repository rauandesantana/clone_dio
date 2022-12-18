import styled, { css } from "styled-components";

export const LinkObject = styled.a`
    color: #23DD7A;
    font-weight: 500;
    text-decoration: none;
    cursor: pointer;

    ${({variant}) => (variant === true) && css`
        color: #E5E044;
    `}
    
    ${({disabled, noEfect}) => (disabled === false && noEfect === false) && css`
        &:hover { filter: brightness(1.2); }
        &:active { filter: brightness(1.8); }
    `}

    ${({noEfect}) => (noEfect === true) && css`
        color: #FFF;
    `}

    ${({disabled}) => (disabled === true) && css`
        opacity: 0.5;
        cursor: default;
    `}
`;