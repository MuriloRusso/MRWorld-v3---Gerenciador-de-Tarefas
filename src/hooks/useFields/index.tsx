import { useState } from "react"
import { inputProps } from "../../types/input"

export default function useFields() {

    const [userField, setUserField] = useState<inputProps>({
        value: "",
        error: false,
        errorText: "* Campo Obrigatório",
        required: true,
        placeholder: "Digite o E-mail para entrar"
    });

    const handleUserFieldChange = (newValue: string) => {
        setUserField(prev => ({
        ...prev,
        value: newValue
        }));
    };

    const handleUserFieldError = (newValue: boolean) => {
        setUserField(prev => ({
        ...prev,
        error: newValue
        }));
    };

    return {userField, handleUserFieldChange, handleUserFieldError}
}