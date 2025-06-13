import ButtonPrimary from "../../../../components/ButtonPrimary";
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';

export default function ButtonNew({handleModal}:{handleModal: (value: boolean) => void;}){
    return(
        <ButtonPrimary value="Nova Empresa" Icon={AddCircleOutlineOutlinedIcon} onClick={() => handleModal(true)} />
    )
}