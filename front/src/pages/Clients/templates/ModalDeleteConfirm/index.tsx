import { Box, Typography } from "@mui/material";
import Modal from '@mui/material/Modal';
import ModalPanel from "../ModalPanel";
import ModalFooter from "../ModalFooter";
import { ClientData } from "../../../../types/client";
import { FormPersonParamsProps } from "../../../../types/person";
import ModalFooterConfirmDelete from "../ModalFooterConfirmDelete";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 1000,
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
    fieldsData:ClientData;
    //drop: () => void;
}



export default function ModalDeleteConfirm({visible, handleModal, fieldsData/*, drop*/}:ModalProps){
    return (
        <Modal
            open={visible}
            onClose={() => handleModal(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Criar Empresa/Cliente
                </Typography>
                <ModalFooterConfirmDelete handleModal={handleModal} /*drop={drop}*/ fieldsData={fieldsData}/>
            </Box>
        </Modal>
    )

}