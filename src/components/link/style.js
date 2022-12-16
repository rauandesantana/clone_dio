import styled, { css } from "styled-components";

export const LinkObject = styled.a`
    color: #23DD7A;
    font-weight: 500;
    text-decoration: none;

    ${({variant}) => (variant === true) && css`
        color: #E5E044;
    `}
`;