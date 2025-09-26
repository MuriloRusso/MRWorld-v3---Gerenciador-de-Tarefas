import { Box, Grid, Typography } from "@mui/material";
import Modal from '@mui/material/Modal';
import { Client, ClientData } from "../../../../types/client";
import ButtonSecondary from "../../../../components/ButtonSecondary";
import ButtonPrimary from "../../../../components/ButtonPrimary";
import API_URL from "../../../../config/api";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
//   border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  maxWidth: '100%',
    // height: 800
};

type ModalProps = {
    visible: boolean;
    item: Client | null;
    handleModal: (value:boolean) => void;
    drop: (id: number) => void;
}

export default function ModalDeleteConfirm({visible, item, handleModal, drop}:ModalProps){

    if(item === null){
        return (<></>);
    }

    return (
        <Modal
            open={visible}
            onClose={() => handleModal(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Excluir definitivamente
                </Typography>
                {/* <Grid sx={{display: 'flex', flexDirection: 'row', gap: '10px', paddingY: '10px'}}>
                    <img 
                        src={
                            item.id ? API_URL + '/api/clients/uploads/' + item.id + '/' + item.logo : 
                            `https://placehold.co/100x100?text=${item.name}`
                        }
                        style={{maxHeight: '80px', width: 'auto', borderRadius: 100}}
                    />
                    <Typography id="modal-modal-item-name" variant="h5" component="p">{item.name}</Typography>
                </Grid> */}
                <Typography
                    id="modal-modal-text"
                    variant="inherit"
                    component="p"
                    sx={{color: "#444746", display: 'flex', flexDirection: 'row', gap: '20px', paddingY: '20px',}}
                    >
                    O item "{item.name}" será excluido definitivamente. Não é possível desfazer essa ação.
                </Typography>
                <Grid sx={{ display: 'flex', flexDirection: 'row', gap: '20px', paddingY: '20px', justifyContent: "flex-end"}}>
                    <ButtonSecondary value="Cancelar" onClick={() => handleModal(false)} />
                    <ButtonPrimary value="Excluir definitivamente" onClick={()=> {drop(item.id)}}/>
                </Grid>
            </Box>
        </Modal>
    )

}