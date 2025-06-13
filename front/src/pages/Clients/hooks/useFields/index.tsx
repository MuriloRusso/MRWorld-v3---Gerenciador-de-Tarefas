import { useContext, useState } from "react"
import { ClientData } from "../../../../types/client"
import { GlobalContext } from "../../../../contexts/GlobalContext";

export default function useFields(){

    const { addToast } = useContext(GlobalContext);

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
            required: true
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
        },
        notes: {
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

    const validateFields = () => {
        let isValid = true;

        Object.entries(fieldsData).forEach(([key, field]) => {
            if (field.required && field.value.trim() === "") {
                isValid = false;
                setFieldsData(prev => ({
                    ...prev,
                    [key]: {
                        ...prev[key as keyof ClientData],
                        error: true
                    }
                }));

                /*addToast({
                    id: 0,
                    severity: 'error',
                    variant: 'filled',
                    text: 'Campo ' + key + ' é obrigatório!'
                });*/
            }
        });

        return isValid;
    };


    

    return {fieldsData, handleChange, validateFields}
}