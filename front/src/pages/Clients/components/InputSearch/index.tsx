import Input from "../../../../components/Input";

export default function InputSearch({search, handleChangeSearch}:{search: string, handleChangeSearch: (e: string) => void}) {
    return <Input value={search} onChange={handleChangeSearch} placeholder="Buscar..."/>
}