import {  useEffect, useState } from "react"

export default function useModals(){
    const [ modalVisible, setModalVisible ] = useState<boolean>(false);
    const handleModal = (value:boolean) => {
        setModalVisible(value);
    }

    const [ modalDeleteVisible, setModalDeleteVisible ] = useState<boolean>(false);
    const handleModalDelete = (value:boolean) => {
        setModalDeleteVisible(value);
    }

    const [ modalPerson, setModalPerson ] = useState<boolean>(false);
    const handleModalPerson = (value:boolean) => {
        setModalPerson(value);
    }

    const [ formPersonVisible, setFormPersonVisible ] = useState<boolean>(false);
    const handleFormPerson = (value:boolean) => {
        setFormPersonVisible(value);
    }


    const [ modalDeletePersonVisible, setModalDeletePersonVisible ] = useState<boolean>(false);
    const handleModalDeletePerson = (value:boolean) => {
        console.log('delete modal function...');
        
        setModalDeletePersonVisible(value);

        console.log('modaldeleteperson', modalDeletePersonVisible);
        
    }

    useEffect(()=>{
        console.log('modalPerson', modalPerson);
        
    }, [modalPerson])

    useEffect(()=>{
        console.log('modalDeleteVisible', modalDeleteVisible);
        
    }, [modalDeleteVisible])


    return {
        modalVisible,
        handleModal,
        modalPerson,
        handleModalPerson,
        formPersonVisible,
        handleFormPerson,
        modalDeleteVisible,
        handleModalDelete,
        modalDeletePersonVisible,
        handleModalDeletePerson
    }
}