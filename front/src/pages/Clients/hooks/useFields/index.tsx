import { useState } from "react"
import { ClientData } from "../../../../types/client"

export default function useFields(){

    const [ fieldsData, setFieldsData ] = useState<ClientData>({
        name: {
            label: "Nome da Empresa/Cliente",
            value: "",
            placeholder: "Digite o nome da Empresa/Cliente",
            error: false,
            errorText: "* Campo obrigatório",
            required: true
        },
        ower: {
            label: "Nome do dono",
            value: "",
            placeholder: "Digite o nome do dono da Empresa",
            error: false,
            errorText: "* Campo obrigatório",
            required: false
        },
        phone: {
            label: "Telefone",
            value: "",
            placeholder: "Digite o e-telefone da Empresa/Cliente",
            error: false,
            errorText: "* Campo obrigatório",
            required: false
        },
        email: {
            label: "E-mail",
            value: "",
            placeholder: "Digite o mail da Empresa/Cliente",
            error: false,
            errorText: "* Campo obrigatório",
            required: false
        }
    });


    const handleChange = (fieldName: keyof ClientData, newValue: string) => {
        setFieldsData(prev => ({
            ...prev,
            [fieldName]: {
                ...prev[fieldName],
                value: newValue,
                error: prev[fieldName].required ? newValue.trim() === "" : false
            }
        }))
    }

    

    return {fieldsData, handleChange}
}