import { ListItemIcon, ListItemText, MenuItem } from "@mui/material";

type ListMenuItemProps = {
    Icon: React.ComponentType<any>;
    text: string;
    onClick: () => void;
}

export default function ListMenuItem({Icon, text, onClick}: ListMenuItemProps){
    return(
        <MenuItem onClick={onClick}>
            <ListItemIcon>
                <Icon />
            </ListItemIcon>
            <ListItemText>{text}</ListItemText>
        </MenuItem>
    )
}