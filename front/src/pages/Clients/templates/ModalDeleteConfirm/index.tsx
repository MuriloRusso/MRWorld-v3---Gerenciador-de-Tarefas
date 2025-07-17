import { Box, Grid, Typography } from "@mui/material";
import Modal from '@mui/material/Modal';
import { Client, ClientData } from "../../../../types/client";
import ButtonSecondary from "../../../../components/ButtonSecondary";
import ButtonPrimary from "../../../../components/ButtonPrimary";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
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
                    Excluír Empresa/Cliente
                </Typography>
                <Grid sx={{display: 'flex', flexDirection: 'row', gap: '10px', paddingY: '10px'}}>
                    <img 
                        src={
                            item.id ? 'http://localhost/MRWorld/MRWorld-v3---Gerenciador-de-Tarefas/api/clients/uploads/' + item.id + '/' + item.logo : 
                            `https://placehold.co/100x100?text=${item.name}`
                        }
                        style={{maxHeight: '80px', width: 'auto', borderRadius: 100}}
                    />
                    <Typography id="modal-modal-item-name" variant="h5" component="p">{item.name}</Typography>
                </Grid>
                <Typography id="modal-modal-text" variant="inherit" component="p" sx={{borderWidth: 0, borderTopWidth: 1, borderColor: "#ccc", borderStyle: 'solid',  display: 'flex', flexDirection: 'row', gap: '20px', paddingY: '20px',}}>
                    Tem certeza de que deseja excluir o cliente {item.name}?
                </Typography>
                <Grid sx={{borderWidth: 0, borderTopWidth: 1, borderColor: "#ccc", borderStyle: 'solid',  display: 'flex', flexDirection: 'row', gap: '20px', paddingY: '20px', justifyContent: "flex-end"}}>
                    <ButtonSecondary value="Cancelar" onClick={() => handleModal(false)} />
                    <ButtonPrimary value="Confirmar" onClick={()=> {drop(item.id)}}/>
                </Grid>
            </Box>
        </Modal>
    )

}