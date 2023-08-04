import { useEffect, useState } from "react";
import { LoginContainer } from "./styles";
import { useAuth } from "contexts/auth.context";
import { ByCapitel } from "components/ByCapitel/ByCapitel";
import { api } from "services/api";
import { useNavigate } from "react-router-dom";

export const Home = () =>
{
    const [data, setData] = useState<any>([]);
    const navigate = useNavigate();

    const get_data = async () => {
        try {
            const res = await api.get('/home');
            setData(data);
        }
        catch (error: any)
        {
            console.error(error);
            if(error.response.status === 424)
            {
                navigate('/fill-information', { replace: true });
            }
        }
    };

    useEffect(() => {
        get_data();
    }, []);

    return (
        <></>
    );
}