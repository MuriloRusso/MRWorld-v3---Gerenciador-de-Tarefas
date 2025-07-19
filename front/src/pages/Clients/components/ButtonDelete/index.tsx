import { GridRenderCellParams } from "@mui/x-data-grid";
import ListMenuItem from "../ListMenuItem";
import DeleteIcon from '@mui/icons-material/Delete';
import useDelete from "../../hooks/useDelete";

type ButtonDeleteProps = {
    handleClose: () => void;
    item: GridRenderCellParams;
    onClick: () => void;}

export default function ButtonDelete({handleClose, item, onClick}:ButtonDeleteProps) {
    const handlePressed = () => {
        onClick();
        handleClose();
    }
    return <ListMenuItem Icon={DeleteIcon} text="Excluir" onClick={handlePressed} item={item}/>
}