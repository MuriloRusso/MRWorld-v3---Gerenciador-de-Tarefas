import { useState } from "react"
import { inputProps } from "../../../../types/input"
import { LoginFields } from "../../../../types/login";
export default function useFields() {
    const [loginFields, setLoginFields] = useState<LoginFields>({
        userField: {
            value: "",
            error: false,
            errorText: "* Campo Obrigatório",
            required: true,
            placeholder: "Digite o E-mail para entrar"
        },
        passwordField: {
            value: "",
            error: false,
            errorText: "* Campo Obrigatório",
            required: true,
            placeholder: "Digite a Senha para entrar"
        }
    });

    const handleLoginFieldChange = (
        field: keyof LoginFields,
        newValue: string
    ) => {
        setLoginFields(prev => ({
        ...prev,
        [field]: {
            ...prev[field],
            value: newValue
        }
        }));
    };

    const handleLoginFieldError = (
        field: keyof LoginFields,
        newValue: boolean
    ) => {
        setLoginFields(prev => ({
        ...prev,
        [field]: {
            ...prev[field],
            error: newValue
        }
        }));
    };

    return {loginFields, handleLoginFieldChange, handleLoginFieldError}
}