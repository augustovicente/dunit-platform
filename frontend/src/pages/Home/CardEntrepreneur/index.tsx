import { useState } from "react";
import { CardContainer } from "./styles";
import { toast } from "react-toastify";

type CardEntrepreneurProps = {
    data: any;
};

export const CardEntrepreneur = ({ data }: CardEntrepreneurProps) => {
    data.target_value = data.target_value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });

    const [isExpanded, setIsExpanded] = useState(false);
    const copyToClipboard = (text: string) =>
    {
        navigator.clipboard.writeText(text);
        toast.success('Copiado para a área de transferência');
    };

    return (<CardContainer>
        <div className="preview">
            <div className="info">
                <span>
                    {data.company_name}
                </span>
                <span>
                    {data.target_value} | {data.target_equity}%
                </span>
            </div>
            <i
                className={'ph ph-caret-down ' + (isExpanded ? 'expanded' : '')}
                onClick={() => setIsExpanded(!isExpanded)}
            />
        </div>
        <div className={'expanded-content '+ (isExpanded ? 'expanded' : '')}>
            <div className="content-item">
                <span>Já recebeu aporte?</span>
                <span>
                    {data.has_received_vc ? "Sim" : "Não"}
                </span>
            </div>
            <div className="content-item">
                <span>Já foi acelerado/incubado?</span>
                <span>
                    {data.has_been_incubated ? "Sim" : "Não"}
                </span>
            </div>
            <div className="content-item">
                <span>Possuí clientes?</span>
                <span>
                    {data.has_clients ? "Sim" : "Não"}
                </span>
            </div>
            <div className="content-item">
                <span>Valor de captação:</span>
                <span>
                    {data.target_value}
                </span>
            </div>
            <div className="content-item">
                <span>Equity da oferta:</span>
                <span>
                    {data.target_equity}%
                </span>
            </div>
            <div className="contact">
                {data.wpp && (
                    <div className="contact-item">
                        <i className="ph ph-whatsapp-logo" />
                        <span>
                            {data.wpp}
                        </span>
                        <i
                            className="ph ph-copy-simple"
                            onClick={() => copyToClipboard(data.wpp)}
                        />
                    </div>
                )}
                {data?.user?.email && (
                    <div className="contact-item">
                        <i className="ph ph-envelope-open" />
                        <span>
                            {data?.user?.email}
                        </span>
                        <i
                            className="ph ph-copy-simple"
                            onClick={() => copyToClipboard(data?.user?.email)}
                        />
                    </div>
                )}
                {data.linkedin && (
                    <div className="contact-item">
                        <i className="ph ph-linkedin-logo" />
                        <span>
                            {data.linkedin}
                        </span>
                        <i
                            className="ph ph-copy-simple"
                            onClick={() => copyToClipboard(data.linkedin)}
                        />
                    </div>
                )}
            </div>
        </div>
    </CardContainer>)
};
