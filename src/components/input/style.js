import styled, {css} from "styled-components";

export const InputContainer = styled.div`
    border-bottom: 2px solid #3B3450;

    display: flex;
    justify-content: center;
    align-items: center;

    ${({variant}) => (variant === true) && css`
        border: none;
        background-color: #2D2D37;
        border-radius: 0.5rem;
    `}
    
    ${({width}) => (width !== "") && css`
        width: ${width};
    `}

    ${({height}) => (height !== "") && css`
        height: ${height};
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

export const InputIconContainer = styled.div`
    margin: 0px 10px;

    ${({variant}) => (variant === true) && css`
        margin-top: 5px;
    `}
`;

export const InputObject = styled.input`
    width: 100%;
    height: 35px;
    border: none;
    background-color: transparent;

    ${({variant}) => (variant === true) && css`
        border-radius: 0rem 0.5rem 0.5rem 0rem;
    `}
`;