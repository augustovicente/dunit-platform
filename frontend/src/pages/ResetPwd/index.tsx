import { useState } from "react";
import { ResetPwdContainer } from "./styles";

export const ResetPwd = () => {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [seePwd, setSeePwd] = useState(false);
    const [seePwdConfirm, setSeePwdConfirm] = useState(false);
    
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        setLoading(true);
        event.preventDefault();
        // const response = await signIn({
        //     email: username,
        //     password
        // });
        setLoading(false);
        
        // if (!response)
        // {
        //     setError(true);
        //     return;
        // }
    };

    return (
        <ResetPwdContainer>
            <img src="imgs/dunit.png" alt="" />
            <div className="login-content">
                <div className="intro">
                    <span className="intro-title">Recuperar Senha</span>
                    <span className="intro-subtitle">
                        Digite seu e-mail para enviarmos um link de recuperação de senha.
                    </span>
                </div>
                <form onSubmit={handleSubmit}>
                <div className={`form-group ${error ? 'error': ''}`}>
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
                        {error && (
                            <div className="alert alert-danger" role="alert">
                                Senha ou email incorretos.
                            </div>
                        )}
                    </div>
                    <div className={`form-group ${error ? 'error': ''}`}>
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
                        {error && (
                            <div className="alert alert-danger" role="alert">
                                Erro ao redefinir senha.
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
    );
}