import { GridRenderCellParams } from "@mui/x-data-grid";
import ListMenuItem from "../ListMenuItem";
import EditIcon from '@mui/icons-material/Edit';

type ButtonEditProps = {
    handleClose: () => void;
    item: GridRenderCellParams;
    onClick: () => void;
}

export default function ButtonEdit({handleClose, item, onClick}:ButtonEditProps){
    const handlePressed = () => {
        onClick();
        handleClose();
    }
    return <ListMenuItem Icon={EditIcon} text="Editar" onClick={handlePressed} item={item}/>
}