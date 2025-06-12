import ButtonPrimary from "../../../../components/ButtonPrimary";

export default function ButtonSubmit({onClick}:{onClick: () => void;}){
    return <ButtonPrimary value="Salvar" sx={{width: "130px"}} onClick={onClick}/>
}