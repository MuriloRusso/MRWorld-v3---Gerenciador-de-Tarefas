import { GridRenderCellParams } from "@mui/x-data-grid";
import ListMenuItem from "../ListMenuItem";
import EditIcon from '@mui/icons-material/Edit';

type ButtonEditProps = {
    handleClose: () => void;
    item: GridRenderCellParams;
    handleModal: (value: boolean) => void;
}

export default function ButtonEdit({handleClose, item, handleModal}:ButtonEditProps){
    const handlePressed = () => {
        handleModal(true);
        handleClose();
    }

    return <ListMenuItem Icon={EditIcon} text="Editar" onClick={handlePressed} item={item}/>
    
}