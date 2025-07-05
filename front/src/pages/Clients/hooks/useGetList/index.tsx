import { useEffect, useState } from 'react';
import api from '../../../../services/api';
import { Client } from '../../../../types/client';


export default function useGetList() {
    
    const [clients, setClients ] = useState<Client[]>([]);

    const getList = () => {
        console.log('--------getList----------');
        
        api.get('/clients/get.php'/*, { params: { search } }*/)
            .then(response => setClients(response.data.data))
            .catch(error => console.error(error));
    }

    useEffect(() => {
        getList();
        // }, [search]);
    }, []);


    return { clients, getList };
}
