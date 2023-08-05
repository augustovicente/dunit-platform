import { useEffect, useState } from "react";
import { HomeContainer } from "./styles";
import { useAuth } from "contexts/auth.context";
import { PoweredBy } from "components/PoweredBy/PoweredBy";
import { api } from "services/api";
import { useNavigate } from "react-router-dom";

export const Home = () =>
{
    const [data, setData] = useState<any>([]);
    const navigate = useNavigate();

    const get_data = async () => {
        try {
            const { data: res } = await api.get('/home');
            setData(res);
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
        <HomeContainer>
            <div className="header">
                <img src="" alt="" />
                <span></span>
                <span></span>
            </div>
            <div className="body">
                {data.map((item: any) => {
                    return (<></>);
                })}
            </div>
            <footer>
                <div></div>
                <PoweredBy />
            </footer>
        </HomeContainer>
    );
}