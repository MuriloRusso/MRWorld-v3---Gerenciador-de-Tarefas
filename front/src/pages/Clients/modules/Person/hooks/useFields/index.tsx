import { useState } from "react"
import { PersonData } from "../../../../../../types/person"

export default function useFields(){
    const [fieldsPersonData, setFieldsPersonData] = useState<PersonData>({
        name: {
            label: "Nome",
            placeholder: "Digite o nome da pessoa",
            value: "",
            required: true
        },
        id_client: {
            label: "Empresa",
            placeholder: "Selecione a empresa da pessoa",
            value: "",
            required: true
        },
        avatar: {
            label: "Avatar",
            placeholder: "Inclua uma foto da pessoa",
            value: ""
        },
        phone: {
            label: "Telefone",
            placeholder: "Digite o telefone da pessoa",
            value: ""
        },
        email: {
            label: "E-mail",
            placeholder: "Digite o e-mail da pessoa",
            value: ""
        },
        position: {
            label: "Cargo",
            placeholder: "Digite o cargo da pessoa",
            value: ""
        },
        function: {
            label: "Função",
            placeholder: "Digite a função da pessoa",
            value: ""
        },
        is_owner: {
            label: "Proprietário?",
            placeholder: "Proprietário",
            value: ""
        },
        notes: {
            label: "Anotaçõess",
            placeholder: "Digite as anotações da pessoa",
            value: ""
        }
    });


    const handleChangePerson = (fieldName: keyof PersonData, newValue: string) => {
        setFieldsPersonData(prev => {
        const prevField = prev?.[fieldName] ?? { value: "", required: false, error: false };

        return {
            ...prev,
            [fieldName]: {
            ...prevField,
            value: newValue,
            error: prevField.required ? newValue.trim() === "" : false,
            },
        };
        });
    };

    return {fieldsPersonData, handleChangePerson}
}