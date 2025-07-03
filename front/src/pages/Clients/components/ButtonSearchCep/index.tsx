import ButtonPrimary from "../../../../components/ButtonPrimary";
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import useSearchCep from "../../hooks/useSearchCep";

export default function ButtonSearchCep({handleSearchCep}:{handleSearchCep: (value: boolean) => void;}){
    return(
        <ButtonPrimary value="Nova Empresa" Icon={AddCircleOutlineOutlinedIcon} onClick={() => handleSearchCep(true)} />
    )
}