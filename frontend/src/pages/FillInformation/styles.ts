import { styled } from "styled-components";

export const FillInfoContainer = styled.div`
    flex-direction: row;
    display: flex;
    overflow: hidden;
    flex-wrap: nowrap;
    width: 100vw;
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
            overflow: hidden;
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
            height: auto;
            img.logo {
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
            img.logo {
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

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    span.title {
        font-family: ${({ theme }) => theme.fontFamily.alternative};
        color: ${({ theme }) => theme.colors.interactivePrimaryAux};
        display: flex;
        line-height: 100%;
        margin: 0 auto;
        margin-top: 10vh;
        font-size: 45px;
        font-weight: 700;
        width: 90%;
    }
    div.form-input {
        display: flex;
        flex-direction: column;
        margin: 0 auto;
        width: 90%;
        gap: 10px;
        label {
            font-family: ${({ theme }) => theme.fontFamily.alternative};
            color: ${({ theme }) => theme.colors.interactivePrimaryAux};
            font-size: 24px;
        }
        form {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            gap: 20px;
            width: 100%;
            div.form-check{
                display: flex;
                flex: 0 0 calc(50% - 20px);
                width: calc(50% - 20px);
                align-items: center;
                input:where([type="radio"], [type="checkbox"]){
                    -webkit-appearance : none;
                    appearance         : none;
                    width: 25px;
                    height: 25px;
                    margin             : calc(0.75em - 11px) 0.25rem 0 0;
                    vertical-align     : top;
                    border             : 2px solid ${({ theme }) => theme.colors.interactivePrimaryAux};
                    border-radius      : 100%;
                    background         : #fff no-repeat center center;
                    &[type="checkbox"]{
                        border-radius: 5px;
                    }
                }
                input[type="radio"]:checked, input[type="checkbox"]:checked{
                    animation: radio 0.4s ease-in-out forwards;
                    background-color: ${({ theme }) => theme.colors.interactivePrimaryAux};
                    &[type="checkbox"]::before{
                        content: "\\ea30";
                        font-family: "Phosphor" !important;
                        font-size: 20px;
                    }
                }
                @keyframes radio{
                    0%{
                        transform: scale(0.3);
                    }
                    70%{
                        transform: scale(1.3);
                    }
                    100%{
                        transform: scale(1);
                    }
                }
            }
            label {
                color: ${({ theme }) => theme.colors.black};
                font-size: 20px;
                opacity: 0.6;
            }
        }
        div.contact-info {
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 10px;
            i {
                font-size: 20px;
                color: ${({ theme }) => theme.colors.white};
                background-color: ${({ theme }) => theme.colors.interactivePrimaryAux};
                width: 40px;
                height: 35px;
                border-radius: 100%;
                display: flex;
                &::before {
                    margin: auto;
                }
            }
        }
    }
    div.accept-terms {
        display: flex;
        flex-direction: column;
        margin: 0 auto;
        width: 90%;
        gap: 10px;
        div.form-check{
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            gap: 10px;
            label {
                font-family: ${({ theme }) => theme.fontFamily.alternative};
                color: ${({ theme }) => theme.colors.black};
                font-size: 16px;
            }
            input[type="checkbox"] {
                appearance: none;
                background-color: transparent;
                margin: 0;
                font: inherit;
                color: ${({ theme }) => theme.colors.interactivePrimaryAux};
                width: 20px;
                height: 20px;
                border: 2px solid ${({ theme }) => theme.colors.interactivePrimaryAux};;
                border-radius: 2px;
                display: flex;
            }

            input[type="checkbox"]::before {
                content: "";
                width: 18px;
                height: 18px;
                transform: scale(0);
                transition: 120ms transform ease-in-out;
                box-shadow: inset 1em 1em var(--form-control-color);
            }

            input[type="checkbox"]:checked::before {
                transform: scale(1) translateY(-20%);;
                content: "\\ea30";
                font-family: "Phosphor" !important;
                font-size: 15px;
            }
        }
    }
    footer {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 90%;
        margin: 0 auto;
        margin-bottom: 10px;
        i {
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
        button {
            display: flex;
            flex-direction: row;
            background-color: ${({ theme }) => theme.colors.interactivePrimaryAux};
            width: 50%;
            padding: 0 20px;
            border-radius: 20px;
            span, i{
                color: ${({ theme }) => theme.colors.white} !important;
                font-family: ${({ theme }) => theme.fontFamily.alternative};
                font-size: 30px;
                margin: auto;
            }
            &[disabled]{
                opacity: 0.5;
                cursor: not-allowed;
            }
            img {
                width: 40px;
                height: 40px;
                margin: auto;
                position: relative !important;
            }
        }
    }
`;
