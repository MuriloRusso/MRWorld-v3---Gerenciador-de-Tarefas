import { Box, Typography } from "@mui/material";
import Modal from '@mui/material/Modal';
import ModalPanel from "../ModalPanel";
import ModalFooter from "../ModalFooter";
import { Client, ClientData } from "../../../../types/client";
import { FormPersonParamsProps } from "../../../../types/person";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
//   width: 1000,
  width: 700,
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
    handleChange: (fieldName: keyof ClientData, newValue: string) => void;
    handleChangeFile: (fieldName: keyof ClientData, newValue: File) => void;
    formPersonParams: FormPersonParamsProps;
    create: (newClient:ClientData) => void;
    update: (selectedItem: Client, clienteData: ClientData) => void;
    selectedItem: Client | null;
    clients: Client[];
}



export default function ModalCreateUpdate({visible,
    handleModal,
    fieldsData,
    formPersonParams,
    handleChange,
    handleChangeFile,
    create,
    update,
    selectedItem,
    clients
}:ModalProps){
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
                <ModalPanel
                    fieldsData={fieldsData}
                    handleChange={handleChange}
                    handleChangeFile={handleChangeFile}
                    formPersonParams={formPersonParams}
                    clients={clients}
                />
                <ModalFooter
                    handleModal={handleModal}
                    create={create}
                    fieldsData={fieldsData}
                    update={update}
                    selectedItem={selectedItem}
                />
            </Box>
        </Modal>
    )

}