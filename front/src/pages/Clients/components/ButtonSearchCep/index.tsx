import ButtonPrimary from "../../../../components/ButtonPrimary";
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import useSearchCep from "../../hooks/useSearchCep";

export default function ButtonSearchCep({handleSearchCep}:{handleSearchCep: (value: boolean) => void;}){
    return(
        <ButtonPrimary value="Buscar Cep" Icon={AddCircleOutlineOutlinedIcon} onClick={() => handleSearchCep(true)} sx={{height: '55px'}}/>
    )
}