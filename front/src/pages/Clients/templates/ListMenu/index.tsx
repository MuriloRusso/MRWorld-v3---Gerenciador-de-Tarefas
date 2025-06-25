import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ListMenuContainer from '../../templates/ListMenuContainer';

export default function ListMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  // const open = Boolean(anchorEl);

  const [open, setOpen] = React.useState<boolean>(Boolean(anchorEl));

  React.useEffect(()=>{
    setOpen(Boolean(anchorEl))
  }, [anchorEl])

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    console.log('closing...');
    
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <MoreHorizIcon color="disabled" />
      </Button>
      <Menu
        id="fade-menu"
        slotProps={{
          list: {
            'aria-labelledby': 'fade-button',
          },
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <ListMenuContainer handleClose={handleClose} anchorEl={anchorEl} open={open} />        
      </Menu>
    </div>
  );
}