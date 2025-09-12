import { useEffect, useState } from 'react';
import { Person } from '../../../../../../types/person';
import api from '../../../../../../services/api';

export default function useGetList() {
    
    const [people, setPeople ] = useState<Person[]>([]);
    // const [search, setSearch] = useState<string>('');

    // const handleChangeSearch = (e:string) => {
    //     setSearch(e);
    // }

    const getList = () => {        
        console.log('geting list person');
        
        api.get('/person/get.php'/*, { params: { search } }*/)
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
