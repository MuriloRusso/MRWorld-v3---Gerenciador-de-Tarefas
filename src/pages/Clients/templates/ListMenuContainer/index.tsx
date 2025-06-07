import { ListItemIcon, ListItemText, Menu, MenuItem } from "@mui/material";
import SpeakerNotesIcon from '@mui/icons-material/SpeakerNotes';
import ListMenuItem from "../../components/ListMenuItem";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

type ListMenuContainerProps = {
    handleClose: () => void;
    anchorEl: null | HTMLElement;
    open: any;
}

export default function ListMenuContainer({handleClose, anchorEl, open}:ListMenuContainerProps){
    return (
        <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            slotProps={{
            list: {
                'aria-labelledby': 'basic-button',
            },
            }}
        >
            <ListMenuItem Icon={SpeakerNotesIcon} text="Anotações" onClick={()=>{}}/>
            <ListMenuItem Icon={EditIcon} text="Editar" onClick={()=>{}}/>
            <ListMenuItem Icon={DeleteIcon} text="Excluir" onClick={()=>{}}/>
        </Menu>
    )
}