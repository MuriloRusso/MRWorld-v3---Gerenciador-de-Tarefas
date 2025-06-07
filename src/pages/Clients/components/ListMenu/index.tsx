import { Button } from "@mui/material";
import { useState } from "react";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ListMenuContainer from "../../templates/ListMenuContainer";

export default function ListMenu(){
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        console.log('aqui...');
        console.log(event.currentTarget);
        
        setAnchorEl(event.currentTarget);
        
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <div>
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                <MoreHorizIcon color="disabled"/>
                <ListMenuContainer handleClose={handleClose} anchorEl={anchorEl} open={open} />
            </Button>
            
        </div>
    );
}