import { useState } from "react"
import { PersonData } from "../../../../../../types/person"

export default function useFields(){
    const [fieldsPersonData, setFieldsPersonData] = useState<PersonData>({
        name: {
            label: "Nome da Pesoa",
            placeholder: "Digite o nome da pessoa",
            value: ""
        },
        id_client: {
            label: "Empresa",
            placeholder: "Empresa da pessoa",
            value: ""
        },
        is_owner: {
            label: "Proprietário",
            placeholder: "Proprietário",
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