import { TextInput } from "components/TextInput";
import { FormContainer } from "../styles";
import { useEffect, useState } from "react";
import Form from 'react-bootstrap/Form';

type dataReturn = {
    company_name: string;
    user_name: string;
    areaId?: number;
    has_received_vc?: boolean;
    has_been_incubated?: boolean;
    has_clients?: boolean;
    vc_roundId?: number;
    target_value?: number;
    target_equity?: number;
    wpp: string;
    linkedin: string;
    has_accepted_terms: boolean;
    has_accepted_terms2: boolean;
};

type EntrepreneurInfoProps = {
    loading: boolean;
    onSubmit: (data: dataReturn) => void;
    goBack: () => void;
};

export const EntrepreneurInfo = ({loading, onSubmit, goBack}: EntrepreneurInfoProps) => {
    const [data, setData] = useState<dataReturn>({
        company_name: '',
        user_name: '',
        areaId: undefined,
        has_received_vc: undefined,
        has_been_incubated: undefined,
        has_clients: undefined,
        vc_roundId: undefined,
        target_value: undefined,
        target_equity: undefined,
        wpp: '',
        linkedin: '',
        has_accepted_terms: false,
        has_accepted_terms2: false,
    });

    const [isEnabled, setIsEnabled] = useState(false);

    useEffect(() => {
        console.log(data);
        
        if (
            data.company_name &&
            data.user_name &&
            data.areaId &&
            data.has_received_vc !== undefined &&
            data.has_been_incubated !== undefined &&
            data.has_clients !== undefined &&
            data.vc_roundId &&
            data.target_value &&
            data.target_equity &&
            data.wpp &&
            data.linkedin &&
            data.has_accepted_terms &&
            data.has_accepted_terms2
        ) {
            setIsEnabled(true);
        }
    }, [data]);

    return <FormContainer>
        <span className="title"> StartUp ✨ </span>
        <div className="form-input">
            <label>Nome da empresa:</label>
            <TextInput
                placeholder="Digite aqui"
                value={data.company_name}
                onChange={(e) => setData({...data, company_name: e.target.value})}
            />
        </div>
        <div className="form-input">
            <label>Seu nome:</label>
            <TextInput
                placeholder="Digite aqui"
                value={data.user_name}
                onChange={(e) => setData({...data, user_name: e.target.value})}
            />
        </div>
        <div className="form-input">
            <label>Área de atuação:</label>
            <Form onChange={(e: any) => setData({...data, areaId: e.target.value })}>
                <Form.Check inline label="Agro" name="area" type="radio" value={1} />
                <Form.Check inline label="Tecnologia" name="area" type="radio" value={6} />
                <Form.Check inline label="Saúde" name="area" type="radio" value={2} />
                <Form.Check inline label="Serviços" name="area" type="radio" value={7} />
                <Form.Check inline label="Finanças" name="area" type="radio" value={3} />
                <Form.Check inline label="Jurídico" name="area" type="radio" value={8} />
                <Form.Check inline label="IoT" name="area" type="radio" value={4} />
                <Form.Check inline label="ESG" name="area" type="radio" value={9} />
                <Form.Check inline label="Impacto" name="area" type="radio" value={5} />
                <Form.Check inline label="Outro" name="area" type="radio" value={10} />
            </Form>
        </div>
        <div className="form-input">
            <label>Já recebeu aporte?</label>
            <Form onChange={(e: any) => setData({...data, has_received_vc: (e.target.value == 1) })}>
                <Form.Check inline label="Sim" name="receivedvc" type="radio" value={1} />
                <Form.Check inline label="Não" name="receivedvc" type="radio" value={2} />
            </Form>
        </div>
        <div className="form-input">
            <label>Já foi acelerado/incubado?</label>
            <Form onChange={(e: any) => setData({...data, has_been_incubated: (e.target.value == 1) })}>
                <Form.Check inline label="Sim" name="isincubated" type="radio" value={1} />
                <Form.Check inline label="Não" name="isincubated" type="radio" value={2} />
            </Form>
        </div>
        <div className="form-input">
            <label>Possui clientes?</label>
            <Form onChange={(e: any) => setData({...data, has_clients: (e.target.value == 1) })}>
                <Form.Check inline label="Sim" name="hasclients" type="radio" value={1} />
                <Form.Check inline label="Não" name="hasclients" type="radio" value={2} />
            </Form>
        </div>
        <div className="form-input">
            <label>Qual rodada você irá fazer?</label>
            <Form onChange={(e: any) => setData({...data, vc_roundId: e.target.value })}>
                <Form.Check inline label="Seed" name="vc" type="radio" value={1} />
                <Form.Check inline label="Anjo" name="vc" type="radio" value={2} />
                <Form.Check inline label="Série A" name="vc" type="radio" value={3} />
                <Form.Check inline label="Série B" name="vc" type="radio" value={4} />
                <Form.Check inline label="Outro" name="vc" type="radio" value={5} />
            </Form>
        </div>
        <div className="form-input">
            <label>Qual valor você está captando?</label>
            <TextInput
                placeholder="Digite o valor em reais, sem pontos ou vírgulas"
                value={data.target_value || ''}
                onChange={(e) => setData({...data, target_value: +e.target.value})}
                type="number"
            />
        </div>
        <div className="form-input">
            <label>Por quanto de equity?</label>
            <TextInput
                placeholder="% de equity (0 a 100)"
                value={data.target_equity || ''}
                onChange={(e) => setData({...data, target_equity: +e.target.value})}
                type="number"
            />
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
