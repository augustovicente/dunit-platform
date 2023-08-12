import { useState } from "react";
import { SignupContainer } from "./styles";
import { api } from "services/api";
import { PREFIX_AUTH } from "utils/constants";
import { useAuth } from "contexts/auth.context";
import { useNavigate } from "react-router-dom";

export const SignUp = () => {
    const [username, setUsername] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [seePwd, setSeePwd] = useState(false);
    const navigate = useNavigate();
    const { triggerUpdate } = useAuth();
    
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        setLoading(true);
        event.preventDefault();
        
        // validate fields
        if (!username || !phone || !password)
        {
            setError(true);
            return;
        }
        
        // create user
        const {data: response}: any = await api.post("/signup", {
            username,
            phone,
            password
        })
        .catch((err) => {
            console.error("Error on signup", err);
            return;
        });
    
        console.log("Response", response.token, response.user);
        localStorage.setItem(`${PREFIX_AUTH}:token`, JSON.stringify(response.token))
        localStorage.setItem(`${PREFIX_AUTH}:user`, JSON.stringify(response.user))

        setLoading(false);
        triggerUpdate();
        navigate('/fill-information', { replace: true });

    };

    return (
        <SignupContainer>
            <img src="imgs/dunit.png" alt="" className="logo" />
            <div className="login-content">
                <div className="intro">
                    <span className="intro-title">Crie sua conta</span>
                    <span className="intro-subtitle">Conecte com empresa e investidores hoje!</span>
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
                        <label htmlFor="phone">Telefone</label>
                        <div className="form-control">
                            <span>+55</span>
                            <input
                                type="number"
                                id="phone"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                            />
                        </div>
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
                                Campos inválidos!
                            </div>
                        )}
                    </div>
                    <button type="submit" className="btn">
                        Cadastrar
                        {loading && (
                            <img src="imgs/spinner.webp" />)}
                    </button>
                    <div className="login">
                        <span>Já tem uma conta?</span>
                        <a href="login">Login</a>
                    </div>
                </form>
            </div>
        </SignupContainer>
    );
}