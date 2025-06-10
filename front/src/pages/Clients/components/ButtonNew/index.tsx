import ButtonPrimary from "../../../../components/ButtonPrimary";

export default function ButtonNew({handleModal}:{handleModal: (value: boolean) => void;}){
    return(
        <ButtonPrimary value="Nova Empresa/Cliente" onClick={() => handleModal(true)} />
    )
}