import { styled } from "styled-components";

export const SignupContainer = styled.div`
    display: flex;
    background-color: ${({ theme }) => theme.colors.background};
    min-height: 100vh;
    width: calc(100vw - 32px);
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 20px;
    padding: 0 16px;
    img.logo {
        display: flex;
        margin: 0 auto;
        margin-top: 20px;
    }
    div.login-content{
        z-index: 1;
        align-items: center;
        justify-content: center;
        display: flex;
        flex-direction: column;
        gap: 40px;
        width: 100%;
        margin: auto 0;
        div.intro{
            display: flex;
            flex-direction: column;
            align-items: start;
            width: 100%;
            span.intro-title{
                font-family: ${({ theme }) => theme.fontFamily.default};
                color: ${({ theme }) => theme.colors.black};
                font-size: ${({ theme }) => theme.fontSizes.large};
                font-weight: 600;
            }
            span.intro-subtitle{
                font-family: ${({ theme }) => theme.fontFamily.default};
                color: ${({ theme }) => theme.colors.contentBase};
                font-size: ${({ theme }) => theme.fontSizes.normal};
            }
        }
        form{
            display: flex;
            flex-direction: column;
            gap: 10px;
            align-items: center;
            justify-content: center;
            width: 100%;
            div.form-group{
                display: flex;
                flex-direction: column;
                align-items: start;
                width: 100%;
                label {
                    font-family: ${({ theme }) => theme.fontFamily.default};
                    font-size: ${({ theme }) => theme.fontSizes.normal};
                    color: ${({ theme }) => theme.colors.interactivePrimary};
                    font-weight: 600;
                }
                input.form-control, div.form-control {
                    background-color: ${({ theme }) => theme.colors.white};
                    border-radius: 10px;
                    border: 1px solid #C6C6C6;
                    padding: 10px 10px;
                    outline: 0;
                    display: flex;
                    font-family: ${({ theme }) => theme.fontFamily.default};
                    font-size: ${({ theme }) => theme.fontSizes.normal};
                    width: calc(100% - 20px);
                    color: ${({ theme }) => theme.colors.black};
                    gap: 20px;
                    span {
                        font-family: ${({ theme }) => theme.fontFamily.default};
                        font-size: ${({ theme }) => theme.fontSizes.normal};
                        color: ${({ theme }) => theme.colors.black};
                        font-weight: 700;
                        position: relative;
                        &::after {
                            content: "";
                            background-color: ${({ theme }) => theme.colors.contentBase};
                            height: 200%;
                            width: 1px;
                            position: absolute;
                            right: -12px;
                            transform: translateY(-50%);
                            top: 50%;
                        }
                    }
                    input {
                        font-family: ${({ theme }) => theme.fontFamily.default};
                        font-size: ${({ theme }) => theme.fontSizes.normal};
                        color: ${({ theme }) => theme.colors.black};
                        background-color: transparent;
                        outline: 0;
                        border: 0;
                        height: 100%;
                        width: 100%;
                    }
                }
                div.pwd-content{
                    width: 100%;
                    position: relative;
                    i{
                        position: absolute;
                        right: 20px;
                        top: 40%;
                        transform: translateY(-50%);
                        font-size: ${({ theme }) => theme.fontSizes.medium};
                        cursor: pointer;
                        height: 10px;
                        width: 10px;
                        color: ${({ theme }) => theme.colors.black};
                    }
                }
                div.alert-danger{
                    font-family: ${({ theme }) => theme.fontFamily.default};
                    color: ${({ theme }) => theme.colors.red};
                    font-size: ${({ theme }) => theme.fontSizes.normal};
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 10px;
                    width: 100%;
                }
                &.error{
                    input.form-control{
                        border: 2px solid ${({ theme }) => theme.colors.red};
                    }
                }
            }
            button.btn{
                margin-top: 20px;
                padding: 10px 20px;
                background-color: ${({ theme }) => theme.colors.interactivePrimary};
                color: ${({ theme }) => theme.colors.white};
                font-family: ${({ theme }) => theme.fontFamily.default};
                font-size: ${({ theme }) => theme.fontSizes.medium};
                font-weight: 600;
                width: 100%;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: center;
                gap: 10px;
                img{
                    height: 20px;
                    width: auto;
                }
            }
            div.login {
                display: flex;
                background-color: ${({ theme }) => theme.colors.background};
                width: 100%;
                justify-content: center;
                gap: 5px;
                align-items: center;
                margin-bottom: 20px;
                span {
                    font-family: ${({ theme }) => theme.fontFamily.default};
                    font-size: ${({ theme }) => theme.fontSizes.normal};
                    color: ${({ theme }) => theme.colors.contentBase};
                }
                a {
                    font-family: ${({ theme }) => theme.fontFamily.default};
                    font-size: ${({ theme }) => theme.fontSizes.normal};
                    color: ${({ theme }) => theme.colors.interactivePrimary};
                    font-weight: 600;
                }
            }
        }
    }
`;
