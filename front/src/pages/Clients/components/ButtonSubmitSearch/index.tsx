import ButtonSearch from "../../../../components/ButtonSearch";

export default function ButtonSubmitSearch({getListSearch}:{getListSearch: () => void}){
    return <ButtonSearch onclick={getListSearch}/>
}