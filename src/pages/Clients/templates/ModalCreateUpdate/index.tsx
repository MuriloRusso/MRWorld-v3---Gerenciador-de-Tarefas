import { Box, Grid, Typography } from "@mui/material";
import Modal from '@mui/material/Modal';
import InputLogo from "../../components/InputLogo";
import InputDescription from "../../components/InputNotes";
import ModalPanel from "../ModalPanel";
import ButtonPrimary from "../../../../components/ButtonPrimary";
// import InputDescription from "../../components/InputDescription";


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 700,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function ModalCreateUpdate({visible, handleFunction}: {visible: boolean; handleFunction: (value:boolean) => void;}){
    return (
        <Modal
            open={visible}
            onClose={() => handleFunction(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Criar Empresa/Cliente
                </Typography>
                <ModalPanel/>

                <Grid sx={{borderWidth: 0, borderTopWidth: 1, borderColor: "#ccc", borderStyle: 'solid',  display: 'flex', flexDirection: 'row', gap: '20px', paddingY: '20px', justifyContent: "flex-end"}}>
                    <ButtonPrimary value="Salvar" />

                </Grid>

            </Box>
        </Modal>
        )

}