import { styled } from "styled-components";

const Container = styled.div`
    margin-top: auto;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    span{
        font-size: 0.8rem;
        color: ${({theme}) => theme.colors.interactivePrimaryAux};
        font-family: ${({theme}) => theme.fontFamily.alternative};
        letter-spacing: 1.85px;
    }
    a {
        color: ${({theme}) => theme.colors.interactivePrimaryAux};
        font-family: ${({theme}) => theme.fontFamily.alternative};
        letter-spacing: 1.85px;
        text-decoration-line: underline;
        font-size: 12px;
        text-align: center;
    }
    img {
        width: 100px;
    }
`;

export const PoweredBy = () => {
    return (<Container>
        <span>Pwrd by:</span>
        <img src="imgs/dunit-studios.png" alt="Dunit Studios" />
        <a>
            Conheça nossos<br/> outros serviços
        </a>
    </Container>);
};
