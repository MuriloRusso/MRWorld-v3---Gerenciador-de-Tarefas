import api from "../../../../services/api";

export default function useSearchCep(){    
    const getAddress = (cep: string) => {
        api.get(`https://viacep.com.br/ws/${cep}/json/`)
            .then(response => console.log(response.data))
            .catch(error => console.error(error));
    }

    return {getAddress}
}