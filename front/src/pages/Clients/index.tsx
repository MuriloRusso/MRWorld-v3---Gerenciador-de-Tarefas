import { Grid } from "@mui/material";
import Menu from "../../components/Menu";
import Container from "./templates/Container";
import ModalCreateUpdate from "./templates/ModalCreateUpdate";
import useModals from "./hooks/useModals";
import useFields from "./hooks/useFields";
import Toast from "../../components/Toast";
import useCreate from "./hooks/useCreate";
import { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import useGetList from "./hooks/useGetList";

export default function Clients(){
    const { modalVisible, handleModal, formPersonVisible, handleFormPerson } = useModals();
    const { fieldsData, handleChange, validateFields } = useFields();
    const { toast, addToast } = useContext(GlobalContext);
    const { getList } = useGetList();
    const { create } = useCreate({handleModal, addToast, validateFields, getList});

    return (
        <Grid sx={{display: "flex", flexDirection: "row"}}>
            <Menu/>
            <Container handleModal={handleModal}/>
            <ModalCreateUpdate
                visible={modalVisible}
                handleModal={handleModal}
                fieldsData={fieldsData}
                handleChange={handleChange}
                formPersonParams={{state: formPersonVisible, handleFormFunction: handleFormPerson}}
                create={create}
            />
            <Toast toasts={toast} />
        </Grid>
    )
}