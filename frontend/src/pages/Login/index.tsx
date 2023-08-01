import { useState } from "react";
import { LoginContainer } from "./styles";
import { useAuth } from "contexts/auth.context";

export const Login = () => {
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
        <LoginContainer>
            <div className="login-content">
                <div className="intro">
                    <span className="intro-title">Bem vindx! 👋</span>
                    <span className="intro-subtitle">Sentimos a sua falta!</span>
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
                    <div className="login-options">
                        <input type="checkbox" id="remember" />
                        <label htmlFor="remember">Lembrar de mim</label>
                        <a href="forgot-pwd">Esqueci minha senha</a>
                    </div>
                    <button type="submit" className="btn">
                        Entrar
                        {loading && (
                            <img src="imgs/spinner.webp" />)}
                    </button>
                    <div className="sign-up">
                        <span>Não tem uma conta?</span>
                        <a href="sign-up">Cadastre-se</a>
                    </div>
                </form>
            </div>
        </LoginContainer>
    );
}