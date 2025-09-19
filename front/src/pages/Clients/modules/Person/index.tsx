import ModalList from "./templates/ModalList";
import ModalCrudPerson from "./templates/ModalCrudPerson";
import { Client } from "../../../../types/client";
import { ToastProps } from "../../../../types/toast";

type PersonProps = {
    modalPerson: boolean;
    handleModal: (value: boolean) => void;
    formPersonVisible: boolean;
    handleFormPerson: (value: boolean) => void;
    addToast: (value: ToastProps) => void;
    selectedItem: Client | null;
};


export default function Person({modalPerson, handleModal, formPersonVisible, handleFormPerson, addToast, selectedItem}:PersonProps){
    return (
        <>
            <ModalList
                handleModal={handleModal}
                visible={modalPerson}
                handleFormPerson={handleFormPerson}
                selectedItem={selectedItem}
            />
            <ModalCrudPerson
                handleModal={handleFormPerson}
                visible={formPersonVisible}
                addToast={addToast}
                selectedItem={selectedItem}
            />
        </>
    )
}