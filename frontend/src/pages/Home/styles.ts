import { styled } from "styled-components";

export const HomeContainer = styled.div`
    display: flex;
    background-color: ${({ theme }) => theme.colors.white};
    min-height: 100vh;
    height: auto;
    width: 100vw;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    padding-top: 20px;
    div.header {
        display: flex;
        flex-direction: column;
        align-items: center;
        img {
            width: 40px;
            height: 40px;
        }
        span{
            font-family: ${({ theme }) => theme.fontFamily.alternative};
            color: ${({ theme }) => theme.colors.interactivePrimaryAux};
            width: 90%;
            &:nth-of-type(1) {
                margin-top: 30px;
                font-size: 50px;
                font-weight: 700;
            }
            &:nth-of-type(2) {
                font-size: 25px;
                font-weight: 500;
            }
        }
    }
    div.body {
        display: flex;
    }
    footer {
        margin-top: auto;
        display: flex;
        padding-bottom: 10px;
        position: relative;
        width: 100%;
        align-items: center;
        justify-content: center;
        i {
            position: absolute;
            bottom: 50%;
            transform: translateY(50%);
            left: 10px;
            cursor: pointer;
            font-size: 30px;
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
`;

export const LogoutModal = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    span {
        font-family: ${({ theme }) => theme.fontFamily.alternative};
        color: ${({ theme }) => theme.colors.interactivePrimaryAux};
        font-size: 18px;
        padding-bottom: 10px;
        border-bottom: 1px solid ${({ theme }) => theme.colors.interactivePrimaryAux};
        width: 100%;
        text-align: center;
    }
    div.options {
        margin-top: 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: row;
        gap: 15px;
        button {
            padding: 10px 40px;
            border-radius: 20px;
            background-color: ${({ theme }) => theme.colors.interactivePrimaryAux};
            letter-spacing: 0.288px;
            font-family: ${({ theme }) => theme.fontFamily.alternative};
        }
    }
`;