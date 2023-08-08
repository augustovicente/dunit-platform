import { useState } from "react";
import { ResetPwdContainer, SuccessFeedback } from "./styles";
import { api } from "services/api";
import { useNavigate, useSearchParams } from "react-router-dom";
import Modal from 'react-modal';

export const ResetPwd = () => {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState({
        status: false,
        message: ""
    });
    const [loading, setLoading] = useState(false);
    const [seePwd, setSeePwd] = useState(false);
    const [seePwdConfirm, setSeePwdConfirm] = useState(false);
    const [searchParams] = useSearchParams();
    const [modalOpen, setModalOpen] = useState(false);
    const navigate = useNavigate();
    
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        setLoading(true);
        event.preventDefault();
        if(password !== confirmPassword)
        {
            setError({
                status: true,
                message: "As senhas não coincidem."
            });
            setLoading(false);
            return;
        }

        await api.post("/reset-password", {
            password,
            token: searchParams.get("t"),
        }).catch(() => {
            setError({
                status: true,
                message: 'Erro ao redefinir senha.'
            });
        });

        setLoading(false);
        setModalOpen(true);
    };

    return (<>
        <ResetPwdContainer>
            <img src="imgs/dunit.png" alt="" className="logo" />
            <div className="login-content">
                <div className="intro">
                    <span className="intro-title">Redefinir Senha</span>
                    <span className="intro-subtitle">
                        Digite sua nova senha e confirme
                    </span>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className={`form-group ${error.status ? 'error': ''}`}>
                        <label htmlFor="password">Senha</label>
                        <div className="pwd-content">
                            <input
                                type={seePwd ? 'text' : 'password'}
                                className="form-control"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            {seePwd ? (
                                <i className="ph ph-eye-slash" onClick={() => setSeePwd(false)}></i>
                            ) : (
                                <i className="ph ph-eye" onClick={() => setSeePwd(true)}></i>
                            )}
                        </div>
                    </div>
                    <div className={`form-group ${error.status ? 'error': ''}`}>
                        <label htmlFor="password">Confirmar Senha</label>
                        <div className="pwd-content">
                            <input
                                type={seePwdConfirm ? 'text' : 'password'}
                                className="form-control"
                                id="password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                            {seePwdConfirm ? (
                                <i className="ph ph-eye-slash" onClick={() => setSeePwdConfirm(false)}></i>
                            ) : (
                                <i className="ph ph-eye" onClick={() => setSeePwdConfirm(true)}></i>
                            )}
                        </div>
                        {error.status && (
                            <div className="alert alert-danger" role="alert">
                                {error.message}
                            </div>
                        )}
                    </div>
                    <button type="submit" className="btn">
                        Salvar
                        {loading && (
                            <img src="imgs/spinner.webp" />)}
                    </button>
                </form>
            </div>
        </ResetPwdContainer>
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
                <span>Nova senha salva!</span>
            </SuccessFeedback>
        </Modal>
    </>);
}