import { useEffect, useState } from 'react';
import api from '../../../../services/api';
import { Client } from '../../../../types/client';


export default function useGetList() {
    
    const [ rows, setRows ] = useState<Client[]>([]);

    const getList = () => {
        api.get('/clients/get.php'/*, { params: { search } }*/)
            .then(response => setRows(response.data.data))
            .catch(error => console.error(error));
    }

    useEffect(() => {
        getList();
        // }, [search]);
    }, []);


    return { rows, getList };
}
