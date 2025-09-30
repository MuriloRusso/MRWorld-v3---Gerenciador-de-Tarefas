import ModalList from "./templates/ModalList";
import ModalCrudPerson from "./templates/ModalCrudPerson";
import { Client } from "../../../../types/client";
import { ToastProps } from "../../../../types/toast";
import useModals from "../../hooks/useModals";
import useFields from "./hooks/useFields";
import ModalDeleteConfirm from "./templates/ModalDeleteConfirm";

type PersonProps = {
    modalPerson: boolean;
    handleModal: (value: boolean) => void;
    formPersonVisible: boolean;
    handleFormPerson: (value: boolean) => void;
    addToast: (value: ToastProps) => void;
    selectedItem: Client | null;
};


export default function Person({modalPerson, handleModal, formPersonVisible, handleFormPerson, addToast, selectedItem}:PersonProps){

    const { modalDeletePersonVisible, handleModalDeletePerson } = useModals();
    const { selectedPerson, changeSelectedPerson } = useFields();


    return (
        <>
            <ModalList
                handleModal={handleModal}
                visible={modalPerson}
                handleFormPerson={handleFormPerson}
                selectedItem={selectedItem}
                handleModalDelete={handleModalDeletePerson}
            />
            <ModalCrudPerson
                handleModal={handleFormPerson}
                visible={formPersonVisible}
                addToast={addToast}
                selectedItem={selectedItem}
            />
            <ModalDeleteConfirm
                visible={modalDeletePersonVisible}
                // visible={false}

                item={selectedPerson}
                handleModal={handleModalDeletePerson}
                // handleModal={()=>{}}

                drop={()=>{}}
            />
        </>
    )
}