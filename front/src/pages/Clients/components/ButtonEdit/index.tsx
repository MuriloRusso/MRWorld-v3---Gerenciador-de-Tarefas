import { GridRenderCellParams } from "@mui/x-data-grid";
import ListMenuItem from "../ListMenuItem";

type ButtonEditProps = {
    handleClose: () => void;
    item: GridRenderCellParams;
    handleModalDelete: (value: boolean) => void;
}

export default function ButtonEdit({handleClose, item, handleModalDelete}:ButtonEditProps){
    return <ListMenuItem Icon={EditIcon} text="Editar" onClick={handleClose} item={item}/>
    
}