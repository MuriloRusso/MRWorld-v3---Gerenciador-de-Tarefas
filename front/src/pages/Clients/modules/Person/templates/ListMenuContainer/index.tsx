import { Menu } from "@mui/material";
import SpeakerNotesIcon from '@mui/icons-material/SpeakerNotes';
import { GridRenderCellParams } from "@mui/x-data-grid";
import PeopleIcon from '@mui/icons-material/People';
import ConstructionIcon from '@mui/icons-material/Construction';
import { Client, ClientData } from "../../../../../../types/client";
import ListMenuItem from "../../components/ListMenuItem";
import ButtonEdit from "../../components/ButtonEdit";
import ButtonDelete from "../../../../components/ButtonDelete";

type ListMenuContainerProps = {
    handleClose: () => void;
    anchorEl: null | HTMLElement;
    open: any;
    item: GridRenderCellParams;
    handleModal: (value: boolean) => void;
    handleModalPerson: (value: boolean) => void;
    handleModalDelete: (value: boolean) => void;
    changeSelectedItem: (item: Client | null) => void;
    handleChange: (fieldName: keyof ClientData, newValue: string) => void;
}

export default function ListMenuContainer({
    handleClose,
    anchorEl,
    open,
    item,
    handleModal,
    handleModalPerson,
    handleModalDelete,
    changeSelectedItem,
    handleChange
}:ListMenuContainerProps){

    const handleEditItem = () => {
        handleModal(true);
        changeSelectedItem(item.row);
        handleChange('logo', 'http://localhost/MRWorld/MRWorld-v3---Gerenciador-de-Tarefas/api/clients/uploads/' + item.row.id + '/' + item.row.logo);

        handleChange('name', item.row.name);
        handleChange('cnpj', item.row.cnpj);
        handleChange('phone', item.row.phone);
        handleChange('email', item.row.email);
        handleChange('cep', item.row.cep);
        handleChange('address', item.row.address);
        handleChange('address_number', item.row.address_number);
        handleChange('city', item.row.city);
        handleChange('country', item.row.country);
        handleChange('state', item.row.state);
        handleChange('neighborhood', item.row.neighborhood);
        handleChange('notes', item.row.notes);
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
            <ButtonEdit handleClose={handleClose} item={item} onClick={handleEditItem}/>
            <ButtonDelete handleClose={handleClose} item={item} onClick={handleDeleteItem} />
        </Menu>
    )
}