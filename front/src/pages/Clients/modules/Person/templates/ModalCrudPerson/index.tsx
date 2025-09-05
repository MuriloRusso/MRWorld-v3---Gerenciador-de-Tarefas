import { Box, Grid, Typography } from "@mui/material";
import Modal from '@mui/material/Modal';
import Form from "../Form";
import ButtonSecondary from "../../../../../../components/ButtonSecondary";
import ButtonPrimary from "../../../../../../components/ButtonPrimary";
import ModalCrudPersonFooter from "../ModalCrudPersonFooter";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 700,
  bgcolor: 'background.paper',
//   border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  maxWidth: '100%',
};

type ModalCrudPersonProps = {
    visible: boolean;
    handleModal: (value:boolean) => void;
}

export default function ModalCrudPerson({
    visible,
    handleModal,
}:ModalCrudPersonProps){
    return (
        <Modal
            open={visible}
            onClose={() => handleModal(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Form/>
                <ModalCrudPersonFooter/>
            </Box>
        </Modal>
    )

}