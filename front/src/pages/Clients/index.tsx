import { Grid } from "@mui/material";
import Menu from "../../components/Menu";
import Container from "./templates/Container";
import ModalCreateUpdate from "./templates/ModalCreateUpdate";
import useModals from "./hooks/useModals";
import useFields from "./hooks/useFields";
import Toast from "../../components/Toast";
import useCreate from "./hooks/useCreate";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import useGetList from "./hooks/useGetList";
import useSearchCep from "./hooks/useSearchCep";

export default function Clients(){
    const { modalVisible, handleModal, formPersonVisible, handleFormPerson } = useModals();
    const { fieldsData, handleChange, handleChangeFile, validateFields } = useFields();
    const { toast, addToast } = useContext(GlobalContext);
    const { getList } = useGetList();
    const { create } = useCreate({handleModal, addToast, validateFields, getList});

    const { getAddress } = useSearchCep();

    // useEffect(()=>{
    //     console.log('Buscando');
        
    //     getAddress();
    // }, [])
    

    return (
        <Grid sx={{display: "flex", flexDirection: "row"}}>
            <Menu/>
            <Container handleModal={handleModal}/>
            <ModalCreateUpdate
                visible={modalVisible}
                handleModal={handleModal}
                fieldsData={fieldsData}
                handleChange={handleChange}
                handleChangeFile={handleChangeFile}
                formPersonParams={{state: formPersonVisible, handleFormFunction: handleFormPerson}}
                create={create}
            />
            <Toast toasts={toast} />
        </Grid>
    )
}