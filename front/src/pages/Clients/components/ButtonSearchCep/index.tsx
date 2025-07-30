import ButtonPrimary from "../../../../components/ButtonPrimary";
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import useSearchCep from "../../hooks/useSearchCep";

export default function ButtonSearchCep({handleChangeSearchCep}:{handleChangeSearchCep: (value: boolean) => void;}){
    return(
        <ButtonPrimary value="Buscar Cep" Icon={AddCircleOutlineOutlinedIcon} onClick={() => handleChangeSearchCep(true)} sx={{height: '55px'}}/>
    )
}