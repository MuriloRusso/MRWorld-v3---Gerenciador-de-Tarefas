import api from "../../../../services/api";
import { ClientData } from "../../../../types/client";

export default function useSearchCep(){    
    const getAddress = (cep: string, handleChange: (fieldName: keyof ClientData, newValue: string) => void) => {
        api.get(`https://viacep.com.br/ws/${cep}/json/`)
            .then((response) => {
                console.log(response.data)
                handleChange('address', response.data.logradouro + ", " + response.data.bairro);
                handleChange('city', response.data.localidade);
                handleChange('state', response.data.uf);
            })
            .catch(error => console.error(error));
    }

    return {getAddress}
}