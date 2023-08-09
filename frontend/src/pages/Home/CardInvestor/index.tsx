import { useState } from "react";
import { CardContainer } from "./styles";
import { toast } from "react-toastify";

type CardInvestorProps = {
    data: any;
};

export const CardInvestor = ({ data }: CardInvestorProps) =>
{
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
                    {data.user.name}
                </span>
                <span>
                    {data.vc_fund}
                </span>
            </div>
            <i
                className={'ph ph-caret-down ' + (isExpanded ? 'expanded' : '')}
                onClick={() => setIsExpanded(!isExpanded)}
            />
        </div>
        <div className={'expanded-content '+ (isExpanded ? 'expanded' : '')}>
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