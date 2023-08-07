import { useState } from "react";
import { ForgotPwdContainer, SuccessFeedback } from "./styles";
import { api } from "services/api";
import Modal from 'react-modal';
import { useNavigate } from "react-router-dom";

export const ForgotPwd = () => {
    const [username, setUsername] = useState("");
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const navigate = useNavigate();
    
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        setLoading(true);
        event.preventDefault();
        await api.post("/forgot-password", {
            email: username
        }).catch(() => {
            setError(true);    
        });
        setLoading(false);
        setModalOpen(true);
    };

    return (
        <>
            <ForgotPwdContainer>
                <img src="imgs/dunit.png" alt="" className="logo" />
                <div className="login-content">
                    <div className="intro">
                        <span className="intro-title">Recuperar Senha</span>
                        <span className="intro-subtitle">
                            Digite seu e-mail para enviarmos um link de recuperação de senha.
                        </span>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className={`form-group ${error ? 'error': ''}`}>
                            <label htmlFor="username">E-mail</label>
                            <input
                                type="text"
                                className="form-control"
                                id="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        <button type="submit" className="btn">
                            Enviar
                            {loading && (
                                <img src="imgs/spinner.webp" />)}
                        </button>
                        <div className="login">
                            <span>Já tem uma conta?</span>
                            <a href="login">Login</a>
                        </div>
                    </form>
                </div>
            </ForgotPwdContainer>
            <Modal
                shouldCloseOnOverlayClick={true}
                onRequestClose={() => {
                    setModalOpen(false);
                    navigate('/login', { replace: true });
                }}
                isOpen={modalOpen}
                className={'item-modal'}
            >
                <SuccessFeedback>
                    <i className="ph ph-check" />
                    <span>Enviado com sucesso!</span>
                </SuccessFeedback>
            </Modal>
        </>
    );
}