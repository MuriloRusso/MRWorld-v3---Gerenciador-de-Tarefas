import { Button, ListItemIcon, ListItemText, Menu, MenuItem } from "@mui/material";
import SpeakerNotesIcon from '@mui/icons-material/SpeakerNotes';
import ListMenuItem from "../ListMenuItem";
import EditIcon from '@mui/icons-material/Edit';
import { GridRenderCellParams } from "@mui/x-data-grid";
import ButtonDelete from "../../components/ButtonDelete";

type ListMenuContainerProps = {
    handleClose: () => void;
    anchorEl: null | HTMLElement;
    open: any;
    item: GridRenderCellParams;
    drop: (id: number) => void;
}

export default function ListMenuContainer({handleClose, anchorEl, open, item, drop}:ListMenuContainerProps){

    
    return (
        <Menu
            id="item-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            slotProps={{
            list: {
                'aria-labelledby': 'basic-button',
            },
            }}
        >        
            <ListMenuItem Icon={SpeakerNotesIcon} text="Anotações" onClick={handleClose} item={item}/>
            <ListMenuItem Icon={EditIcon} text="Editar" onClick={handleClose} item={item}/>
            {/* <ListMenuItem Icon={DeleteIcon} text="Excluir" onClick={handleClose} item={item}/> */}
            <ButtonDelete handleClose={handleClose} item={item} drop={drop}/>
        </Menu>
    )
}