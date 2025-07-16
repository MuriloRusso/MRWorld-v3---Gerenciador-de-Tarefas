import {  useState } from "react"

export default function useModals(){
    const [ modalVisible, setModalVisible ] = useState<boolean>(false);
    const handleModal = (value:boolean) => {
        setModalVisible(value);
    }

    const [ modalDeleteVisible, setModalDeleteVisible ] = useState<boolean>(false);
    const handleModalDelete = (value:boolean) => {
        setModalDeleteVisible(value);
    }

    const [ formPersonVisible, setFormPersonVisible ] = useState<boolean>(false);
    const handleFormPerson = (value:boolean) => {
        setFormPersonVisible(value);
    }

    return {modalVisible, handleModal, formPersonVisible, handleFormPerson, modalDeleteVisible, handleModalDelete}
}