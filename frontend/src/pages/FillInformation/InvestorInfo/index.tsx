import { TextInput } from "components/TextInput";
import { FormContainer } from "../styles";
import { useEffect, useState } from "react";
import Form from 'react-bootstrap/Form';

type dataReturn = {
    user_name: string;
    represent_fund: boolean;
    vc_fund: string;
    areas: number[];
    vc_rounds: number[];
    wpp: string;
    linkedin: string;
    has_accepted_terms: boolean;
    has_accepted_terms2: boolean;
};

type InvestorInfoProps = {
    loading: boolean;
    onSubmit: (data: dataReturn) => void;
    goBack: () => void;
};

export const InvestorInfo = ({loading, onSubmit, goBack}: InvestorInfoProps) => {
    const [data, setData] = useState<dataReturn>({
        user_name: '',
        represent_fund: false,
        vc_fund: '',
        areas: [],
        vc_rounds: [],
        wpp: '',
        linkedin: '',
        has_accepted_terms: false,
        has_accepted_terms2: false,
    });

    const [isEnabled, setIsEnabled] = useState(false);

    const handleCheck = (the_var: 'areas'|'vc_rounds', value: number) => {
        const data_var: any[] = data[the_var];
        if(data_var.includes(value)) {
            setData({...data, [the_var]: data_var.filter((item) => item != value)});
        }
        else {
            setData({...data, [the_var]: [...data_var, value]});
        }
    };

    useEffect(() => {
        if (
            data.user_name &&
            (data.represent_fund ? data.vc_fund : true) &&
            data.areas &&
            data.vc_rounds &&
            data.wpp &&
            data.linkedin &&
            data.has_accepted_terms &&
            data.has_accepted_terms2
        ) {
            setIsEnabled(true);
        }
    }, [data]);

    return <FormContainer>
        <span className="title"> Investidor ✏ </span>
        <div className="form-input">
            <label>Seu nome:</label>
            <TextInput
                placeholder="Digite aqui"
                value={data.user_name}
                onChange={(e) => setData({...data, user_name: e.target.value})}
            />
        </div>
        <div className="form-input">
            <label>Você representa algum fundo/VC ou algo do gênero?</label>
            <Form onChange={(e: any) => setData({...data, represent_fund: (e.target.value == 1) })}>
                <Form.Check inline label="Sim" name="receivedvc" type="radio" value={1} />
                <Form.Check inline label="Não" name="receivedvc" type="radio" value={2} />
            </Form>
        </div>
        {data.represent_fund &&
            (<div className="form-input">
                <label>Se sim, qual?</label>
                <TextInput
                    placeholder="Digite aqui"
                    value={data.vc_fund}
                    onChange={(e) => setData({...data, vc_fund: e.target.value})}
                />
            </div>)
        }
        <div className="form-input">
            <label>Área de interesse:</label>
            <Form>
                <Form.Check inline label="Agro" name="area" type="checkbox" value={1}
                    onChange={(e: any) => handleCheck('areas', e.target.value)}
                />
                <Form.Check inline label="Tecnologia" name="area" type="checkbox" value={6}
                    onChange={(e: any) => handleCheck('areas', e.target.value)}
                />
                <Form.Check inline label="Saúde" name="area" type="checkbox" value={2}
                    onChange={(e: any) => handleCheck('areas', e.target.value)}
                />
                <Form.Check inline label="Serviços" name="area" type="checkbox" value={7}
                    onChange={(e: any) => handleCheck('areas', e.target.value)}
                />
                <Form.Check inline label="Finanças" name="area" type="checkbox" value={3}
                    onChange={(e: any) => handleCheck('areas', e.target.value)}
                />
                <Form.Check inline label="Jurídico" name="area" type="checkbox" value={8}
                    onChange={(e: any) => handleCheck('areas', e.target.value)}
                />
                <Form.Check inline label="IoT" name="area" type="checkbox" value={4}
                    onChange={(e: any) => handleCheck('areas', e.target.value)}
                />
                <Form.Check inline label="ESG" name="area" type="checkbox" value={9}
                    onChange={(e: any) => handleCheck('areas', e.target.value)}
                />
                <Form.Check inline label="Impacto" name="area" type="checkbox" value={5}
                    onChange={(e: any) => handleCheck('areas', e.target.value)}
                />
                <Form.Check inline label="Outro" name="area" type="checkbox" value={10}
                    onChange={(e: any) => handleCheck('areas', e.target.value)}
                />
            </Form>
        </div>
        <div className="form-input">
            <label>Qual rodada você se interessa?</label>
            <Form>
                <Form.Check inline label="Seed" name="vc" type="checkbox" value={1} 
                    onChange={(e: any) => handleCheck('vc_rounds', e.target.value)}
                />
                <Form.Check inline label="Anjo" name="vc" type="checkbox" value={2}
                    onChange={(e: any) => handleCheck('vc_rounds', e.target.value)}
                />
                <Form.Check inline label="Série A" name="vc" type="checkbox" value={3}
                    onChange={(e: any) => handleCheck('vc_rounds', e.target.value)}
                />
                <Form.Check inline label="Série B" name="vc" type="checkbox" value={4}
                    onChange={(e: any) => handleCheck('vc_rounds', e.target.value)}
                />
                <Form.Check inline label="Outro" name="vc" type="checkbox" value={5}
                    onChange={(e: any) => handleCheck('vc_rounds', e.target.value)}
                />
            </Form>
        </div>
        <div className="form-input">
            <label>Deixe aqui seus contatos</label>
            <div className="contact-info">
                <i className="ph ph-whatsapp-logo" />
                <TextInput
                    placeholder="Ex: 5511999999999"
                    value={data.wpp}
                    onChange={(e) => setData({...data, wpp: e.target.value})}
                />
            </div>
            <div className="contact-info">
                <i className="ph ph-linkedin-logo" />
                <TextInput
                    placeholder="Digite aqui a URL do seu perfil"
                    value={data.linkedin}
                    onChange={(e) => setData({...data, linkedin: e.target.value})}
                />
            </div>
        </div>
        <div className="accept-terms">
            <Form.Check
                type="checkbox"
                label="Li e estou de acordo com Termo de Uso e Política de privacidade."
                onChange={(e: any) => setData({...data, has_accepted_terms: e.target.checked})}
            />
            <Form.Check
                type="checkbox"
                label="Aceito compartilhar meus dados com a Dunit Studios."
                onChange={(e: any) => setData({...data, has_accepted_terms2: e.target.checked})}
            />
        </div>
        <footer>
            <i className="ph ph-caret-left" onClick={() => goBack()}/>
            <button disabled={!isEnabled} onClick={() => onSubmit(data)}>
                <span>Salvar</span>
                {loading 
                    ? (<img src="imgs/spinner.webp" />)
                    : (<i className="ph ph-caret-right"/>)}
            </button>
        </footer>
    </FormContainer>;
};
