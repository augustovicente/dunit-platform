import { useEffect, useState } from "react";
import { HomeContainer, LogoutModal } from "./styles";
import Modal from 'react-modal';
import { PoweredBy } from "components/PoweredBy/PoweredBy";
import { api } from "services/api";
import { useNavigate } from "react-router-dom";
import { CardInvestor } from "./CardInvestor";
import { CardEntrepreneur } from "./CardEntrepreneur";
import { useAuth } from "contexts/auth.context";
import { toast } from "react-toastify";

export const Home = () =>
{
    const [data, setData] = useState<any>([]);
    const navigate = useNavigate();
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const { signOut } = useAuth();

    const handleLogoutModal = () => {
        setModalIsOpen(true);
    };

    const handleLogout = () => {
        signOut();
        setModalIsOpen(false);
    };

    const get_data = async () => {
        try {
            const { data: res } = await api.get('/home');
            setData(res);
        }
        catch (error: any)
        {
            if(error.response.status === 424)
            {
                navigate('/fill-information', { replace: true });
            }
            else
            {
                console.error(error);
                toast.error('Erro ao carregar dados');
            }
        }
    };

    useEffect(() => {
        get_data();
    }, []);

    return (<>
        <HomeContainer>
            <div className="header">
                <img src="imgs/dunit.png" alt="" />
                {data?.user_type && (
                    <>
                        <span>
                            {data?.user_type === 1 ? 'Investidor ✏' : 'StartUp ✨'}
                        </span>
                        <span>
                            {data?.user_type === 1 ?
                                'As StartUps com o perfil para seu investimento:' : 
                                'Os investidores com o perfil para sua empresa:'
                            }
                        </span>
                    </>
                )}
            </div>
            <div className="body">
                {data?.items?.map((item: any, index: number) => {
                    return data.user_type === 1 ? (
                        <CardEntrepreneur data={item} key={'card-'+index} />
                    ) : (
                        <CardInvestor data={item} key={'card-'+index} />
                    );
                })}
            </div>
            <footer>
                <i className="ph ph-caret-left" onClick={handleLogoutModal}/>
                <PoweredBy />
            </footer>
        </HomeContainer>
        <Modal
            shouldCloseOnOverlayClick={true}
            onRequestClose={() => {
                setModalIsOpen(false);
            }}
            isOpen={modalIsOpen}
            className={'logout-modal'}
        >
            <LogoutModal>
                <span>Você deseja sair?</span>
                <div className="options">
                    <button onClick={handleLogout}>SIM</button>
                    <button onClick={() => setModalIsOpen(true)}>NÃO</button>
                </div>
            </LogoutModal>
        </Modal>
    </>
    );
}