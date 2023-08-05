import { styled } from "styled-components";

export const FillInfoContainer = styled.div`
    flex-direction: row;
    display: flex;
    div.step-1, div.step-2 {
        min-height: 100vh;
        height: 100vh;
        width: 100vw;
        min-width: 100vw;
        display: flex;
        flex-direction: column;
        &.step-1 {
            background-color: ${({ theme }) => theme.colors.white};
            position: relative;
            gap: 70px;
            img {
                position: absolute;
                top: 20px;
                left: 50%;
                transform: translateX(-50%);
            }
            span {
                color: ${({ theme }) => theme.colors.interactivePrimaryAux};
                font-family: ${({ theme }) => theme.fontFamily.alternative};
                width: 90%;
                margin: 0 auto;
                &.title {
                    font-size: 45px;
                    margin-top: 10vh;
                    font-weight: 600;
                }
                &.subtitle, &.description {
                    font-size: 30px;
                }
                &.call {
                    font-size: 45px;
                }
            }
            i {
                &:nth-of-type(1) {
                    bottom: 10px;
                    left: 10px;
                }
                &:nth-of-type(2) {
                    bottom: 10px;
                    right: 10px;
                }
                cursor: pointer;
                position: absolute;
                font-size: 50px;
                color: ${({ theme }) => theme.colors.white};
                background-color: ${({ theme }) => theme.colors.interactivePrimaryAux};
                width: 70px;
                height: 70px;
                border-radius: 20px;
                display: flex;
                &::before {
                    margin: auto;
                }
            }
        }
        &.step-2 {
            background-color: ${({ theme }) => theme.colors.white};
            position: relative;
            gap: 30px;
            img {
                position: absolute;
                top: 20px;
                left: 50%;
                transform: translateX(-50%);
            }
            span {
                color: ${({ theme }) => theme.colors.interactivePrimaryAux};
            }
        }
    }
`;

export const IntroContainer = styled.div<{ step: number }>`
    flex-direction: row;
    display: flex;
    overflow: hidden;
    flex-wrap: nowrap;
    width: 100vw;
    div.step-1, div.step-2, div.step-3, div.step-4 {
        min-height: 100vh;
        height: 100vh;
        width: 100vw;
        min-width: 100vw;
        display: flex;
        flex-direction: column;
        &.step-1 {
            background: linear-gradient(180deg, #8981FF 0%, #564CDE 100%);
            img {
                margin: auto;
                width: 70%;
	            animation: pulse 1s infinite;
            }
            @keyframes pulse {
                0% {
                    transform: scale(0.95);
                    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.6);
                }

                70% {
                    transform: scale(1);
                    box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
                }

                100% {
                    transform: scale(0.95);
                    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
                }
            }
        }
        &.step-2 {
            background: linear-gradient(180deg, #8981FF 0%, #564CDE 100%);
            gap: 10px;
            position: relative;
            span.subtitle {
                font-family: ${({ theme }) => theme.fontFamily.alternative};
                margin: 0 auto;
                margin-top: auto;
                font-size: 30px;
                width: 80%;
            }
            span.title {
                font-family: ${({ theme }) => theme.fontFamily.alternative};
                letter-spacing: 15.6px;
                font-size: 80px;
                margin: 0 auto;
                margin-bottom: auto;
                max-width: 80%;
                line-height: 98.5%;
            }
            i {
                cursor: pointer;
                position: absolute;
                bottom: 10px;
                right: 10px;
                font-size: 50px;
                background-color: ${({ theme }) => theme.colors.white};
                color: ${({ theme }) => theme.colors.interactivePrimaryAux};
                width: 70px;
                height: 70px;
                border-radius: 20px;
                display: flex;
                &::before {
                    margin: auto;
                }
            }
        }
        &.step-3 {
            background-color: ${({ theme }) => theme.colors.white};
            position: relative;
            gap: 30px;
            img {
                position: absolute;
                top: 20px;
                left: 50%;
                transform: translateX(-50%);
            }
            div.investimento {
                margin: 0 auto;
                flex-direction: column;
                width: 80%;
                margin-top: auto;
                span {
                    font-family: ${({ theme }) => theme.fontFamily.alternative};
                    color: ${({ theme }) => theme.colors.interactivePrimaryAux};
                    display: flex;
                    line-height: 100%;
                    &:nth-child(1) {
                        font-size: 25px;
                    }
                    &:nth-child(2) {
                        font-size: 50px;
                    }
                }
            }
            div.investir {
                margin: 0 auto;
                margin-bottom: auto;
                width: 80%;
                flex-direction: column;
                span {
                    font-family: ${({ theme }) => theme.fontFamily.alternative};
                    color: ${({ theme }) => theme.colors.interactivePrimaryAux};
                    display: flex;
                    line-height: 100%;
                    &:nth-child(1) {
                        font-size: 25px;
                        word-spacing: 5px;
                    }
                    &:nth-child(2) {
                        font-size: 50px;
                    }
                }
            }
            i {
                cursor: pointer;
                position: absolute;
                bottom: 10px;
                right: 10px;
                font-size: 50px;
                color: ${({ theme }) => theme.colors.white};
                background-color: ${({ theme }) => theme.colors.interactivePrimaryAux};
                width: 70px;
                height: 70px;
                border-radius: 20px;
                display: flex;
                &::before {
                    margin: auto;
                }
            }
        }
        &.step-4 {
            background-color: ${({ theme }) => theme.colors.white};
            position: relative;
            img {
                position: absolute;
                top: 20px;
                left: 50%;
                transform: translateX(-50%);
            }
            span.title {
                font-family: ${({ theme }) => theme.fontFamily.alternative};
                color: ${({ theme }) => theme.colors.interactivePrimaryAux};
                display: flex;
                line-height: 100%;
                margin: 0 auto;
                margin-top: 30vh;
                font-size: 45px;
            }
            span.subtitle {
                font-family: ${({ theme }) => theme.fontFamily.alternative};
                color: ${({ theme }) => theme.colors.interactivePrimaryAux};
                display: flex;
                line-height: 100%;
                margin: 60px auto;
                font-size: 25px;
            }
            button {
                background-color: ${({ theme }) => theme.colors.interactivePrimaryAux};
                color: ${({ theme }) => theme.colors.white};
                font-family: ${({ theme }) => theme.fontFamily.alternative};
                font-size: 30px;
                width: 60%;
                margin: 0 auto;
                padding: 0;
                border-radius: 10px;
                &:nth-of-type(2) {
                    margin-top: 40px;
                }
            }
        }
    }
`;
