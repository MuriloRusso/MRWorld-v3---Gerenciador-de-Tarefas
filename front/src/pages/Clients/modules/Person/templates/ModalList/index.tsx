import { Box, Grid, Typography } from "@mui/material";
import Modal from '@mui/material/Modal';
import List from "../List";
import ModalFooter from "../../../../templates/ModalFooter";
import ButtonSecondary from "../../../../../../components/ButtonSecondary";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 1200,
//   width: 700,
  bgcolor: 'background.paper',
//   border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  maxWidth: '100%',
};

type ModalListProps = {
    visible: boolean;
    handleModal: (value:boolean) => void;
}

export default function ModalList({
    visible,
    handleModal,
}:ModalListProps){
    return (
        <Modal
            open={visible}
            onClose={() => handleModal(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Pessoas
                </Typography>
                <List handleModal={()=>{}} />
                <Grid sx={{borderWidth: 0, borderTopWidth: 1, borderColor: "#ccc", borderStyle: 'solid',  display: 'flex', flexDirection: 'row', gap: '20px', paddingY: '20px', justifyContent: "flex-end"}}>
                    <ButtonSecondary onClick={()=> handleModal(false)} value="Voltar"/>
                </Grid>
            </Box>
        </Modal>
    )

}