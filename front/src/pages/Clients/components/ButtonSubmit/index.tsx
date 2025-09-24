import ButtonPrimary from "../../../../components/ButtonPrimary";
import { ClientData } from "../../../../types/client";

export default function ButtonSubmit({handleSubmit}:{handleSubmit: () => void}){
    return <ButtonPrimary value="Salvar" sx={{width: "130px"}} onClick={handleSubmit} id="button-submit"/>
}