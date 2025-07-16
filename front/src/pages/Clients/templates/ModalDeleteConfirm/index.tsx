import { Box, Grid, Typography } from "@mui/material";
import Modal from '@mui/material/Modal';
import { ClientData } from "../../../../types/client";
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
    handleModal: (value:boolean) => void;
}

export default function ModalDeleteConfirm({visible, handleModal}:ModalProps){
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
                <Typography id="modal-modal-title" variant="inherit" component="p">
                    Tem certeza de que deseja excluir esse cliente?
                </Typography>

                <Grid sx={{borderWidth: 0, borderTopWidth: 1, borderColor: "#ccc", borderStyle: 'solid',  display: 'flex', flexDirection: 'row', gap: '20px', paddingY: '20px', justifyContent: "flex-end"}}>
                    <ButtonSecondary value="Cancelar" />
                    <ButtonPrimary value="Confirmar" />
                </Grid>
            </Box>
        </Modal>
    )

}