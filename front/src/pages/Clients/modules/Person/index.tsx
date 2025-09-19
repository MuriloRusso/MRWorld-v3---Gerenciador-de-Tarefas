import { Grid } from "@mui/material";
import { FormPersonParamsProps } from "../../../../types/person";
import Form from "./templates/Form";
import List from "./templates/List";
import ModalList from "./templates/ModalList";
import ModalCrudPerson from "./templates/ModalCrudPerson";
import { Client } from "../../../../types/client";
import { ToastProps } from "../../../../types/toast";

type NewType = {
    modalPerson: boolean;
    handleModal: (value: boolean) => void;
    formPersonVisible: boolean;
    handleFormPerson: (value: boolean) => void;
    addToast: (value: ToastProps) => void;
    selectedItem: Client | null;
};

type PersonPros = NewType


export default function Person({modalPerson, handleModal, formPersonVisible, handleFormPerson, addToast, selectedItem}:PersonPros){
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