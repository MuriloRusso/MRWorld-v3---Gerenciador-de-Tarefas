import { Grid } from "@mui/material";
import Menu from "../../components/Menu";
import Container from "./templates/Container";
import ModalCreateUpdate from "./templates/ModalCreateUpdate";
import useModals from "./hooks/useModals";
import useFields from "./hooks/useFields";
import Toast from "../../components/Toast";
import useCreate from "./hooks/useCreate";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import useGetList from "./hooks/useGetList";
import { Client } from "../../types/client";
import ModalDeleteConfirm from "./templates/ModalDeleteConfirm";
import useDelete from "./hooks/useDelete";
import useUpdate from "./hooks/useUpdate";
import ModalList from "./modules/Person/templates/ModalList";
import ModalCrudPerson from "./modules/Person/templates/ModalCrudPerson";
import Person from "./modules/Person";

export default function Clients(){
    
    const [ rows, setRows ] = useState<Client[]>([]);

    const {
        modalVisible,
        handleModal,
        modalPerson,
        handleModalPerson,
        formPersonVisible,
        handleFormPerson,
        modalDeleteVisible,
        handleModalDelete
    } = useModals();

    const { 
        fieldsData,
        handleChange,
        handleChangeFile,
        validateFields,
        selectedItem,
        changeSelectedItem,
        resetFields 
    } = useFields();
    
    const { toast, addToast } = useContext(GlobalContext);
    const { getList, clients, search, handleChangeSearch, getListSearch } = useGetList();
    const { create } = useCreate({handleModal, addToast, validateFields, getList});
    const { update } = useUpdate({handleModal, addToast, validateFields, getList});
    const { drop } = useDelete({handleModalDelete, addToast, getList});

    useEffect(() => {
        const fetch = async () => {
           await getList();           
        }
        fetch();
    }, []);

    useEffect(()=>{
        setRows(clients);
    }, [clients])
      

    return (
        <Grid sx={{display: "flex", flexDirection: "row"}}>
            <Menu/>
            <Container
                handleModal={handleModal}
                handleModalPerson={handleModalPerson}
                handleModalDelete={handleModalDelete}
                rows={rows}
                changeSelectedItem={changeSelectedItem}
                handleChange={handleChange}
                resetFields={resetFields}
                search={search}
                handleChangeSearch={handleChangeSearch}
                getListSearch={getListSearch}
            />
            <ModalCreateUpdate
                visible={modalVisible}
                handleModal={handleModal}
                fieldsData={fieldsData}
                handleChange={handleChange}
                handleChangeFile={handleChangeFile}
                formPersonParams={{state: formPersonVisible, handleFormFunction: handleFormPerson}}
                create={create}
                update={update}
                selectedItem={selectedItem}
                clients={rows}
            />
            <ModalDeleteConfirm
                visible={modalDeleteVisible}
                item={selectedItem}
                handleModal={handleModalDelete}
                drop={drop}
            />
            <Person
                handleModal={handleModalPerson}
                formPersonVisible={formPersonVisible}
                modalPerson={modalPerson}
                handleFormPerson={handleFormPerson}
                addToast={addToast}
                selectedItem={selectedItem}
            />
            <Toast toasts={toast} />
        </Grid>
    )
}