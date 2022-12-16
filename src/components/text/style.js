import styled, { css } from "styled-components";

export const TextObject = styled.p`
    ${({width}) => (width !== "") && css`
        width: ${width};
    `}

    ${({height}) => (height !== "") && css`
        height: ${height};
    `}

    ${({size}) => (size !== "") && css`
        font-size: ${size};
    `}

    ${({lineHeight}) => (lineHeight !== "") && css`
        line-height: ${lineHeight};
    `}

    ${({fontWeight}) => (fontWeight !== "") && css`
        font-weight: ${fontWeight};
    `}

    ${({variant}) => (variant === true) && css`
        color: #E4105D;
    `}

    ${({marginLeft}) => (marginLeft !== "") && css`
        margin-left: ${marginLeft};
    `}

    ${({marginRight}) => (marginRight !== "") && css`
        margin-right: ${marginRight};
    `}

    ${({marginTop}) => (marginTop !== "") && css`
        margin-top: ${marginTop};
    `}
    
    ${({marginBottom}) => (marginBottom !== "") && css`
        margin-bottom: ${marginBottom};
    `}
`;