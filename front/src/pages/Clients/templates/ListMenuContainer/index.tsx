import { Menu } from "@mui/material";
import SpeakerNotesIcon from '@mui/icons-material/SpeakerNotes';
import ListMenuItem from "../../components/ListMenuItem";
import { GridRenderCellParams } from "@mui/x-data-grid";
import ButtonDelete from "../../components/ButtonDelete";
import { Client } from "../../../../types/client";
import ButtonEdit from "../../components/ButtonEdit";

type ListMenuContainerProps = {
    handleClose: () => void;
    anchorEl: null | HTMLElement;
    open: any;
    item: GridRenderCellParams;
    handleModal: (value: boolean) => void;
    handleModalDelete: (value: boolean) => void;
    changeSelectedItem: (item: Client | null) => void;
}

export default function ListMenuContainer({
    handleClose,
    anchorEl,
    open,
    item,
    handleModal,
    handleModalDelete,
    changeSelectedItem
}:ListMenuContainerProps){

    const handleEditItem = () => {
        handleModal(true);
        changeSelectedItem(item.row);
    }
    
    const handleDeleteItem = () => {
        handleModalDelete(true);
        changeSelectedItem(item.row);
    }
    
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
            {/* <ListMenuItem Icon={EditIcon} text="Editar" onClick={handleClose} item={item}/> */}
            <ButtonEdit handleClose={handleClose} item={item} handleModal={handleEditItem}/>
            {/* <ListMenuItem Icon={DeleteIcon} text="Excluir" onClick={handleClose} item={item}/> */}
            <ButtonDelete handleClose={handleClose} item={item} handleModalDelete={handleDeleteItem}/>
        </Menu>
    )
}