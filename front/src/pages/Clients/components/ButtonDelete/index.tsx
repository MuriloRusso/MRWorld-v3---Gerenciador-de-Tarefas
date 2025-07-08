import { GridRenderCellParams } from "@mui/x-data-grid";
import ListMenuItem from "../../templates/ListMenuItem";
import DeleteIcon from '@mui/icons-material/Delete';
import useDelete from "../../hooks/useDelete";

export default function ButtonDelete({handleClose, item}:{handleClose: () => void; item: GridRenderCellParams;}) {
    const { drop } = useDelete();
    const dropItem = () => {
        drop(item.row.id);
        handleClose();
    }
    return <ListMenuItem Icon={DeleteIcon} text="Excluir" onClick={dropItem} item={item}/>
}