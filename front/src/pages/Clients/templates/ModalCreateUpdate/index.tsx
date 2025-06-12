import { Box, Typography } from "@mui/material";
import Modal from '@mui/material/Modal';
import ModalPanel from "../ModalPanel";
import ModalFooter from "../ModalFooter";
import { ClientData } from "../../../../types/client";

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

type ModalProps = {
    visible: boolean;
    handleModal: (value:boolean) => void;
    fieldsData:ClientData;
    handleChange: (fieldName: keyof ClientData, newValue: string) => void;
    create: (newClient:ClientData) => void;
}

export default function ModalCreateUpdate({visible, handleModal, fieldsData, handleChange, create}:ModalProps){
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
                <ModalPanel fieldsData={fieldsData} handleChange={handleChange}/>
                <ModalFooter handleModal={handleModal} create={create} fieldsData={fieldsData}/>
            </Box>
        </Modal>
    )

}