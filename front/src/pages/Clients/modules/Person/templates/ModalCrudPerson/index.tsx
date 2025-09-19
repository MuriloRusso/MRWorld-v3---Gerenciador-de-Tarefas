import { Box } from "@mui/material";
import Modal from '@mui/material/Modal';
import Form from "../Form";
import ModalCrudPersonFooter from "../ModalCrudPersonFooter";
import useCreate from "../../hooks/useCreate";
import { ToastProps } from "../../../../../../types/toast";
import useFields from "../../hooks/useFields";
import useGetList from "../../hooks/useGetList";
import { Client } from "../../../../../../types/client";

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
    addToast: (value: ToastProps) => void;
    selectedItem: Client | null;
}

export default function ModalCrudPerson({
    visible,
    handleModal,
    addToast,
    selectedItem
}:ModalCrudPersonProps){

    const { fieldsPersonData, validateFields, handleChangePerson } = useFields();
    const { people, getList } = useGetList({selectedItem});
    const { create } = useCreate({handleModal, addToast, validateFields, getList, selectedItem});


    return (
        <Modal
            open={visible}
            onClose={() => handleModal(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Form props={{fieldsPersonData, handleChangePerson}}/>
                <ModalCrudPersonFooter
                    handleModal={handleModal}
                    create={() => create(fieldsPersonData)}
                />
            </Box>
        </Modal>
    )

}