import { useContext, useEffect, useState } from "react";
import { ClientData } from "../../../../types/client";
import { GlobalContext } from "../../../../contexts/GlobalContext";

export default function useFields() {

  const { addToast } = useContext(GlobalContext);

  const [fieldsData, setFieldsData] = useState<ClientData>({
    name: {
      label: "Nome da Empresa/Cliente",
      value: "",
      placeholder: "Digite o nome da Empresa/Cliente",
      error: false,
      errorText: "* Campo obrigatório",
      required: true
    },
    cnpj: {
      label: "CNPJ",
      value: "",
      placeholder: "Digite o CNPJ da Empresa",
      error: false,
      errorText: "* Campo obrigatório",
      required: false
    },
    client: {
      label: "Cliente de:",
      value: "",
      placeholder: "Seleciona a qual empressa essa empresa é cliente",
      error: false,
      errorText: "* Campo obrigatório",
      required: false
    },
    logo: {
      label: "Logo",
      value: null,
      placeholder: "URL do logo",
      error: false,
      errorText: "* Campo obrigatório",
      required: false
    },
    id_contact_method: {
      label: "Meio de Contato",
      value: "",
      placeholder: "ID do meio de contato",
      error: false,
      errorText: "* Campo obrigatório",
      required: false
    },
    email: {
      label: "E-mail",
      value: "",
      placeholder: "Digite o e-mail da Empresa/Cliente",
      error: false,
      errorText: "* Campo obrigatório",
      required: false
    },
    phone: {
      label: "Telefone",
      value: "",
      placeholder: "Digite o telefone da Empresa/Cliente",
      error: false,
      errorText: "* Campo obrigatório",
      required: false
    },
    notes: {
      label: "Observações",
      value: "",
      placeholder: "Digite observações adicionais",
      error: false,
      errorText: "* Campo obrigatório",
      required: false
    },
    cep: {
      label: "CEP",
      value: "",
      placeholder: "Digite o CEP",
      error: false,
      errorText: "* Campo obrigatório",
      required: false
    },
    address: {
      label: "Endereço",
      value: "",
      placeholder: "Digite o endereço",
      error: false,
      errorText: "* Campo obrigatório",
      required: false
    },
    address_number: {
      label: "Número",
      value: "",
      placeholder: "Nº",
      error: false,
      errorText: "* Campo obrigatório",
      required: false
    },
    neighborhood: {
      label: "Bairro",
      value: "",
      placeholder: "Digite o endereço",
      error: false,
      errorText: "* Campo obrigatório",
      required: false
    },
    city: {
      label: "Cidade",
      value: "",
      placeholder: "Digite a cidade",
      error: false,
      errorText: "* Campo obrigatório",
      required: false
    },
    state: {
      label: "Estado",
      value: "",
      placeholder: "Digite o estado",
      error: false,
      errorText: "* Campo obrigatório",
      required: false
    },
    country: {
      label: "País",
      value: "",
      placeholder: "Digite o país",
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
    }));
  };


  const handleChangeFile = (fieldName: keyof ClientData, newValue: File) => {
    setFieldsData(prev => ({
      ...prev,
      [fieldName]: {
        ...prev[fieldName],
        value: newValue,
        error: prev[fieldName].required ? newValue.name.trim() === "" : false
      }
    }));
  };


  const validateFields = () => {
    let isValid = true;
    Object.entries(fieldsData).forEach(([key, field]) => {
      if (field.required && (!field.value || String(field.value).trim() === "")) {
        isValid = false;
        setFieldsData(prev => ({
          ...prev,
          [key as keyof ClientData]: { ...prev[key as keyof ClientData], error: true }
        }));
        addToast({ id: 0, severity: "error", text: `Campo ${field.label} é obrigatório`, variant: "filled" }); 
      }
    });
    return isValid;
  };

  useEffect(()=>{
    console.log(fieldsData);
    
  }, [fieldsData])

  return { fieldsData, handleChange, handleChangeFile, validateFields };
}