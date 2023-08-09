import { styled } from "styled-components";

export const CardContainer = styled.div`
    display: flex;
    width: 100%;
    max-width: 100%;
    flex-direction: column;
    div.preview {
        background-color: ${({theme}) => theme.colors.interactivePrimaryBackground};
        width: 100%;
        max-width: calc(100% - 40px);
        padding: 10px 20px;
        display: flex;
        flex-direction: row;
        border-radius: 20px;
        justify-content: space-between;
        div.info {
            display: flex;
            flex-direction: column;
            span {
                font-family: ${({theme}) => theme.fontFamily.alternative};
                color: ${({theme}) => theme.colors.black};
                &:first-child {
                    font-size: 18px;
                    line-height: 18px;
                    font-weight: 500;
                }
                &:last-child {
                    font-size: 12px;
                    font-weight: 400;
                }
            }
        }
        i {
            font-size: 30px;
            color: ${({theme}) => theme.colors.white};
            background-color: ${({theme}) => theme.colors.interactivePrimaryAux};
            width: 30px;
            height: 30px;
            border-radius: 100%;
            margin: auto 0;
            transition-duration: 0.8s;
            transition-property: transform;
            &.expanded {
                transform: rotate(180deg);
            }
        }
    }
    div.expanded-content {
        display: flex;
        background-color: ${({theme}) => theme.colors.interactiveSecondary};
        width: 100%;
        max-width: calc(100% - 40px);
        padding: 0 20px;
        flex-direction: column;
        border-radius: 10px;
        gap: 10px;
        max-height: 0;
        transition: max-height 0.30s ease-out;
        overflow: hidden;
        &.expanded {
            max-height: 100%;
            padding: 10px 20px;
            transition: max-height 0.30s ease-in;
        }
        div.content-item {
            display: flex;
            flex-direction: column;
            span {
                font-size: 18px;
                font-family: ${({theme}) => theme.fontFamily.alternative};
                &:first-child {
                    color: ${({theme}) => theme.colors.interactivePrimaryAux};
                }
                &:last-child {
                    color: ${({theme}) => theme.colors.black};
                }
            }
        }
        div.contact {
            display: flex;
            flex-direction: column;
            gap: 5px;
            margin-bottom: 10px;
            div.contact-item {
                display: flex;
                flex-direction: row;
                align-items: center;
                gap: 10px;
                span {
                    font-size: 14px;
                    font-family: ${({theme}) => theme.fontFamily.alternative};
                    color: ${({theme}) => theme.colors.black};
                }
                i {
                    font-size: 20px;
                    color: ${({theme}) => theme.colors.interactivePrimaryAux};
                }
            }
        }
    }
`;