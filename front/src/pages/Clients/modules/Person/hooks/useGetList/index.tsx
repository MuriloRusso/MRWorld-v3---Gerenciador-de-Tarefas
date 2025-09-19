import { useEffect, useState } from 'react';
import { Person } from '../../../../../../types/person';
import api from '../../../../../../services/api';
import { Client } from '../../../../../../types/client';

export default function useGetList({selectedItem}:{selectedItem:Client | null}) {
    
    const [people, setPeople ] = useState<Person[]>([]);
    // const [search, setSearch] = useState<string>('');

    // const handleChangeSearch = (e:string) => {
    //     setSearch(e);
    // }
    

    const getList = () => {
        console.log('get list person');
        if(!selectedItem){
            return
        }
        console.log('geting list person');
        
        api.get(`/person/get.php?id_client=${selectedItem.id}`/*, { params: { ...selectedItem.id } }*/)
            .then(response => setPeople(response.data.data))
            .catch(error => console.error(error));
    }

    // const getListSearch = () => {
    //     console.log('--------getListSearch----------');        
    //     api.get('/clients/get.php', { params: { search } })
    //         .then(response => setClients(response.data.data))
    //         .catch(error => console.error(error));
    // }

    useEffect(() => {
        getList();
        // }, [search]);
    }, [/*selectedItem*/]);


    return { people, getList/*, search, handleChangeSearch*/ };
}
