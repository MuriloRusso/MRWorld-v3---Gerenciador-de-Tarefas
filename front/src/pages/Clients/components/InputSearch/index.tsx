import Input from "../../../../components/Input";

export default function InputSearch({search, handleSearch}:{search: string, handleSearch: (e: string) => void}) {
    return <Input value={search} onChange={handleSearch} placeholder="Buscar..."/>
}