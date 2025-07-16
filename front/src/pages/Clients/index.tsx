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
import useDelete from "./hooks/useDelete";
import ModalDeleteConfirm from "./templates/ModalDeleteConfirm";

export default function Clients(){
    const [ rows, setRows ] = useState<Client[]>([]);

    const { modalVisible, handleModal, formPersonVisible, handleFormPerson, modalDeleteVisible, handleModalDelete } = useModals();
    const { fieldsData, handleChange, handleChangeFile, validateFields } = useFields();
    const { toast, addToast } = useContext(GlobalContext);
    const { getList, clients } = useGetList();
    const { create } = useCreate({handleModal, addToast, validateFields, getList});
    const { drop } = useDelete({handleModal, addToast, getList});

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
            <Container handleModal={handleModal} rows={rows} drop={drop}/>
            <ModalCreateUpdate
                visible={modalVisible}
                handleModal={handleModal}
                fieldsData={fieldsData}
                handleChange={handleChange}
                handleChangeFile={handleChangeFile}
                formPersonParams={{state: formPersonVisible, handleFormFunction: handleFormPerson}}
                create={create}
            />
            <ModalDeleteConfirm visible={modalDeleteVisible} handleModal={handleModalDelete}  /*drop={()=>{}}*/ />
            <Toast toasts={toast} />
        </Grid>
    )
}