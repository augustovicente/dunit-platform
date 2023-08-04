import { useState } from "react";
import { FillInfoContainer, IntroContainer } from "./styles";

export const FillInformation = () => {
    const [step, setStep] = useState(0);
    const [userType, setUserType] = useState<number|null>(null);

    const handleUserType = (userType: number) => {
        setUserType(userType);
        setStep(0);
    };
    
    return !userType ? (
        <IntroContainer step={step}>
            <div className="step-1">
                <img src="imgs/intro.png" alt="Dunnit Intro" />
            </div>
            <div className="step-2">
                <span>Bem vindx a</span>
                <span>LET'S DUNIT</span>
            </div>
            <div className="step-3">
                <img src="imgs/dunit.png" alt="" />
                <div>
                    <span>Para ajudar quem quer</span>
                    <span>investimento</span>
                </div>
                <div>
                    <span>ou para quem quer</span>
                    <span>investir</span>
                </div>
            </div>
            <div className="step-4">
                <img src="imgs/dunit.png" alt="" />
                <span>Mas vamos lá!</span>
                <span>Você é:</span>
                <button onClick={() => handleUserType(2)}>
                    Empreendedor
                </button>
                <button onClick={() => handleUserType(1)}>
                    Investidor
                </button>
            </div>
        </IntroContainer>
    ) : (
        <FillInfoContainer>
            <div className="step-1">
                <img src="imgs/dunit.png" alt="" />
                <span>
                    {userType === 1 ? 'Investidor ✏' : 'StartUp ✨'}
                </span>
                <span>
                    {userType === 1 ? 'Legal! Vamos te ajudar nesse fit para aporte!' : 'Legal!'}
                </span>
                <span>
                    Agora precisamos de algumas informações da sua empresa!
                </span>
                <span>
                    Vamos lá?
                </span>
            </div>
            <div className="step-2">
                <img src="imgs/dunit.png" alt="" />

            </div>
        </FillInfoContainer>
    );
}