import { GridRenderCellParams } from "@mui/x-data-grid";
import ListMenuItem from "../../templates/ListMenuItem";
import DeleteIcon from '@mui/icons-material/Delete';
import useDelete from "../../hooks/useDelete";

type ButtonDeleteProps = {handleClose: () => void; item: GridRenderCellParams; handleModalDelete: (value: boolean) => void;}

export default function ButtonDelete({handleClose, item, handleModalDelete}:ButtonDeleteProps) {
    const handleModalDeletePressed = () => {
        handleModalDelete(true);
        handleClose();
    }
    return <ListMenuItem Icon={DeleteIcon} text="Excluir" onClick={handleModalDeletePressed} item={item}/>
}