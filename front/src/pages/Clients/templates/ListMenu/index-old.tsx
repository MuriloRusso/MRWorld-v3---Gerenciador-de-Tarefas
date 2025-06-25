import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ListMenuContainer from "../../templates/ListMenuContainer";

export default function ListMenu(){
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    // const open = Boolean(anchorEl);
    const [open, setOpen] = useState<boolean>(Boolean(anchorEl));

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(null);
        console.log('aqui...');
        console.log(event.currentTarget);
        setAnchorEl(event.currentTarget);
        // setOpen(false);
    };
    const handleClose = () => {
        console.log('close...');

        setAnchorEl(null);
    };

    useEffect(() => {
        console.log('open');
        console.log(open);
    }, [open]);

    useEffect(() => {
        setOpen(Boolean(anchorEl))
    }, [anchorEl]);

    return (
        <div>
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                <MoreHorizIcon color="disabled" />
                <ListMenuContainer handleClose={handleClose} anchorEl={anchorEl} open={open} />
            </Button>
            
        </div>
    );
}