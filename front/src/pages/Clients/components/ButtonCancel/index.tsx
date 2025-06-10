import ButtonSecondary from "../../../../components/ButtonSecondary";

export default function ButtonCancel({handleModal}:{handleModal: (value:boolean) => void;}){
    return <ButtonSecondary value="Cancelar" sx={{width: "130px"}} onClick={() => handleModal(false)}/>
}