import styled, { css } from "styled-components";

export const ButtonContainer = styled.div`
    margin: 5px;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;

    ${({variant}) => (variant === true) && css`
        margin: 10px;
    `}
`;

export const ButtonObject = styled.button`
    position: relative;
    padding: 0px 10px;
    width: 100%;
    min-width: 100px;
    min-height: 25px;
    color: #FFF;
    font-weight: 400;
    border-radius: 2rem;
    background-color: #565656;
    cursor: pointer;

    &:hover { filter: brightness(1.05); }
    &:active { filter: brightness(1.2); }

    ${({variant}) => (variant === true) && css`
        padding: 4px 10px;
        background-color: #E4105D;

        &::after {
            content: "";
            position: absolute;
            width: calc(100% + 10px);
            height: calc(100% + 10px);
            border-radius: 2rem;
            border: 1px solid #E4105D;
            top: -6px;
            left: -6px;
        }
    `}
`;