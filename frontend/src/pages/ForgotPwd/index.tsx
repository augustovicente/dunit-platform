import { useState } from "react";
import { ForgotPwdContainer } from "./styles";
import { useAuth } from "contexts/auth.context";

export const ForgotPwd = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [seePwd, setSeePwd] = useState(false);
    const { signIn } = useAuth();
    
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        setLoading(true);
        event.preventDefault();
        const response = await signIn({
            email: username,
            password
        });
        setLoading(false);
        
        if (!response)
        {
            setError(true);
            return;
        }
    };

    return (
        <ForgotPwdContainer>
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
    );
}