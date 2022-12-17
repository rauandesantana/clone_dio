import styled, {css} from "styled-components";

export const InputContainer = styled.div`
    border-bottom: 2px solid #3B3450;

    display: flex;
    justify-content: center;
    align-items: center;

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
`;

export const InputObject = styled.input`
    width: 100%;
    height: 35px;
    border: none;
    background-color: transparent;
`;