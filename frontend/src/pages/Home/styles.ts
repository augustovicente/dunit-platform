import { styled } from "styled-components";

export const HomeContainer = styled.div`
    display: flex;
    background-color: ${({ theme }) => theme.colors.white};
    height: 100vh;
    width: 100vw;
    align-items: center;
    justify-content: center;
`;
