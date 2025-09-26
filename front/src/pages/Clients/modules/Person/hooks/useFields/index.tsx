import { useContext, useEffect, useState } from "react"
import { Person, PersonData } from "../../../../../../types/person"
import { GlobalContext } from "../../../../../../contexts/GlobalContext";

export default function useFields(){
    const { addToast } = useContext(GlobalContext);
    
    const [fieldsPersonData, setFieldsPersonData] = useState<PersonData>({
        name: {
            label: "Nome",
            placeholder: "Digite o nome da pessoa",
            value: "",
            required: true
        },
        // id_client: {
        //     label: "Empresa",
        //     placeholder: "Selecione a empresa da pessoa",
        //     value: "",
        //     required: true
        // },
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


    const validateFields = () => {
        let isValid = true;
        Object.entries(fieldsPersonData).forEach(([key, field]) => {
            if (field.required && (!field.value || String(field.value).trim() === "")) {
            isValid = false;
            setFieldsPersonData(prev => ({
                ...prev,
                [key as keyof PersonData]: { ...prev[key as keyof PersonData], error: true }
            }));
            addToast({ id: 0, severity: "error", text: `Campo ${field.label} é obrigatório`, variant: "filled" }); 
            }
        });
        return isValid;
    };

    const [ selectedPerson, setSelectedPerson] = useState<Person | null>(null);

    const changeSelectedPerson = (person: Person | null) => {
        setSelectedPerson(person);
    }

    useEffect(()=>{
        console.log('fieldsPersonData dentro do hook', fieldsPersonData);
    }, [fieldsPersonData])

    useEffect(()=>{
        console.log('selectedPerson', selectedPerson);
    }, [selectedPerson])

    return {fieldsPersonData, handleChangePerson, validateFields, selectedPerson, changeSelectedPerson}
}