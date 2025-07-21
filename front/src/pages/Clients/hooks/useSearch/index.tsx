import { useState } from "react";

export default function useSearch() {
    
    const [ search, setSearch ] = useState<string>('');

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    }
    
    return {search, handleSearch}
}