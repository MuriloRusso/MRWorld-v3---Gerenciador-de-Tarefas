import api from '../../../../services/api';
import { Client } from '../../../../types/client';
export default function useCreate(){

    const teste:Client = {
        name: "teste - 2 ",
        ower: "Dono teste - 2"
    }

    const create = () => {
        api.get('/clients/create.php', { params: { teste } })
            // .then(response => setRows(response.data.data))
            .catch(error => console.error(error));
        // }, [search]);
        
    }
    
    return {create}
}