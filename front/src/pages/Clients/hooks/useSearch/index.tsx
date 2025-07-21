import { useState } from "react";

export default function useSearch() {
    
    const [ search, setSearch ] = useState<string>('');

    const handleSearch = (e:string) => {
        setSearch(e);
    }
    
    return {search, handleSearch}
}