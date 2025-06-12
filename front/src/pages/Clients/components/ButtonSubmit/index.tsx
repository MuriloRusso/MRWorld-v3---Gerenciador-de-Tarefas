import ButtonPrimary from "../../../../components/ButtonPrimary";
import { ClientData } from "../../../../types/client";

export default function ButtonSubmit({handleCreate}:{handleCreate: () => void}){
    return <ButtonPrimary value="Salvar" sx={{width: "130px"}} onClick={handleCreate}/>
}