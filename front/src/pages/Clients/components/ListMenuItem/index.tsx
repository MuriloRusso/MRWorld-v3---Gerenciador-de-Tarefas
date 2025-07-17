import { ListItemIcon, ListItemText, MenuItem } from "@mui/material";
import { GridRenderCellParams } from "@mui/x-data-grid";

type ListMenuItemProps = {
    Icon: React.ComponentType<any>;
    text: string;
    onClick: () => void;
    item: GridRenderCellParams;
}

export default function ListMenuItem({Icon, text, onClick, item}: ListMenuItemProps){
    return(
        <MenuItem onClick={onClick}>
            <ListItemIcon onClick={onClick}>
                <Icon onClick={onClick}/>
            </ListItemIcon>
            <ListItemText>{text}</ListItemText>
        </MenuItem>
    )
}