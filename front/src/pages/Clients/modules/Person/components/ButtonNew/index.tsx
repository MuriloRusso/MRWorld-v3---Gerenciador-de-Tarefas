import ButtonPrimary from "../../../../../../components/ButtonPrimary";
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';

export default function ButtonNew({onClick}: {onClick: () => void;}){
    return(
        <ButtonPrimary value="Nova Pessoa" Icon={AddCircleOutlineOutlinedIcon} onClick={onClick} />
    )
}