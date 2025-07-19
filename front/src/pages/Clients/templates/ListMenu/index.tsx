import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import Fade from '@mui/material/Fade';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ListMenuContainer from '../../templates/ListMenuContainer';
import { GridRenderCellParams } from '@mui/x-data-grid';
import { Client } from '../../../../types/client';

type ListMenuProps = {
  item:GridRenderCellParams;
  handleModal: (value: boolean) => void;
  handleModalDelete: (value: boolean) => void;
  changeSelectedItem: (item: Client | null) => void;
}

export default function ListMenu({item, handleModal, handleModalDelete, changeSelectedItem}:ListMenuProps) {
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
        <ListMenuContainer
          handleClose={handleClose}
          anchorEl={anchorEl}
          open={open}
          item={item}
          handleModal={handleModal}
          handleModalDelete={handleModalDelete}
          changeSelectedItem={changeSelectedItem}
        />        
      </Menu>
    </div>
  );
}