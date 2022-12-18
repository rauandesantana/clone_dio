import styled, {css} from "styled-components";

export const CardContainer = styled.div`
    width: 100%;
    max-width: 797px;
    min-width: 280px;
    max-height: 400px;
    min-height: 350px;
    padding: 15px;
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const CardContent = styled.div`
    position: relative;
    width: 100%;
    height: 100%;

    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;

    &:hover { 
        filter: brightness(1.05); 

        &::after {
            content: "";
            position: absolute;
            width: calc(100% + 2px);
            height: calc(100% + 2px);
            border-radius: 0.5rem;
            border: 1px solid #FFF;
            top: -2px;
            left: -2px;
        }
    }

    &:active { 
        filter: brightness(1.2); 
    }
`;

export const CardBanner = styled.div`
    width: 100%;
    height: 160px;

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const CardImageBanner = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 0.5rem 0.5rem 0rem 0rem;
`;

export const CardPreview = styled.div`
    width: 100%;
    max-height: 210px;
    min-height: 160px;
    padding: 10px;
    border-radius: 0rem 0rem 0.5rem 0.5rem;
    background-color: #3B4651;

    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
`;

export const CardInfoUser = styled.div`
    width: 100%;
    height: 40px;
    margin-bottom: 10px;
    
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;
`;

export const CardAvatar = styled.div`
    width: 35px;
    height: 35px;
    border: 3px solid #FFF;
    border-radius: 100%;
    
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const CardImageAvatar = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 100%;
`;

export const CardInfo = styled.div`
    padding: 0px 8px;

    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: flex-start;
    flex-grow: 1;
`;

export const CardResume = styled.div`
    width: 100%;
    max-height: 160px;
    min-height: 110px;
    
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    align-items: flex-start;
`;

export const CardReactions = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: flex-end;
`;

export const CardText = styled.span`
    width: 100%;
    max-height: 50px;
    overflow: hidden;  
    text-overflow: ellipsis;

    ${({size}) => (size !== "") && css`
        font-size: ${size};
    `}

    ${({fontWeight}) => (fontWeight !== "") && css`
        font-weight: ${fontWeight};
    `}
    
    ${({marginBottom}) => (marginBottom !== "") && css`
        margin-bottom: ${marginBottom};
    `}
`;

export const CardReact = styled.div`
    margin-right: 15px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;

    img {
        width: 20px;
        height: 20px;
        margin-right: 5px;
        object-fit: scale-down;
    }

    span {
        font-size: 16px;
        font-weight: 700;
    }
`;