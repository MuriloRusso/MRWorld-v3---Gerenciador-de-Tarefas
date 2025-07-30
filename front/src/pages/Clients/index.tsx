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

export default function Clients(){
    
    const [ rows, setRows ] = useState<Client[]>([]);

    const { modalVisible, handleModal, formPersonVisible, handleFormPerson, modalDeleteVisible, handleModalDelete } = useModals();
    const { fieldsData, handleChange, handleChangeFile, validateFields, selectedItem, changeSelectedItem } = useFields();
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
                rows={rows}
                handleModalDelete={handleModalDelete}
                changeSelectedItem={changeSelectedItem}
                handleChange={handleChange}
                search={search}
                handleChangeSearch={handleChangeSearch}
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
            />
            <ModalDeleteConfirm
                visible={modalDeleteVisible}
                item={selectedItem}
                handleModal={handleModalDelete}
                drop={drop}
            />
            <Toast toasts={toast} />
        </Grid>
    )
}