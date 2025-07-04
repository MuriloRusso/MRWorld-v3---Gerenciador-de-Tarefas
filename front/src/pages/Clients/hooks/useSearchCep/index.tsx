import { useContext } from "react";
import api from "../../../../services/api";
import { ClientData } from "../../../../types/client";
import { GlobalContext } from "../../../../contexts/GlobalContext";

export default function useSearchCep(){    
    const { addToast } = useContext(GlobalContext);
    const getAddress = (cep: string, handleChange: (fieldName: keyof ClientData, newValue: string) => void) => {

        api.get(`https://viacep.com.br/ws/${cep}/json/`)
            .then((response) => {
                console.log(response.data)
                handleChange('address', response.data.logradouro);
                handleChange('neighborhood', response.data.bairro);
                handleChange('city', response.data.localidade);
                handleChange('state', response.data.uf);
                handleChange('country', 'Brasil');
                addToast({id: 0, severity:"info", text:"CEP localizado", variant: "filled" });
            })
            .catch((error) => {
                console.error(error);
                addToast({id: 0, severity:"error", text:"CEP inválido", variant: "filled" });
            });
    }

    return {getAddress}
}