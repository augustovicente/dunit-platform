import { styled } from "styled-components";

const CustomInput = styled.input`
    width: 100%;
    height: 40px;
    border: none;
    border-bottom: ${({theme}) => `1px solid ${theme.colors.interactivePrimaryAux}`};
    background-color: transparent;
    color: ${({theme}) => theme.colors.black};
    outline: none;
    font-size: 16px;
`;

type TextInputProps = {
    type?: string;
    placeholder?: string;
    value?: string | number;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const TextInput = ({type = 'text', onChange, placeholder, value}: TextInputProps) => {
    return <CustomInput
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
    />;
};
