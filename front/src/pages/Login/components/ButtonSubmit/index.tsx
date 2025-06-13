import { useContext } from "react";
import ButtonPrimary from "../../../../components/ButtonPrimary";
import { AuthContext } from "../../../../contexts/AuthContext";

export default function ButtonSubmit(){
    const {signIn} = useContext(AuthContext);
    return <ButtonPrimary value="Entrar" onClick={signIn} />
}