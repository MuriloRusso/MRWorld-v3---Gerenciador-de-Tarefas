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

export default function Clients(){
    const { modalVisible, handleModal } = useModals();
    const { fieldsData, handleChange, validateFields } = useFields();
    const { toast, addToast } = useContext(GlobalContext);
    const { create } = useCreate({handleModal, addToast, validateFields});
    return (
        <Grid sx={{display: "flex", flexDirection: "row"}}>
            <Menu/>
            <Container handleModal={handleModal}/>
            <ModalCreateUpdate
                visible={modalVisible}
                handleModal={handleModal}
                fieldsData={fieldsData}
                handleChange={handleChange}
                create={create}
            />
            {/* <Toast text="Logado com sucesso!" severity="success" variant="filled"/> */}
            <Toast toasts={toast} />
        </Grid>
    )
}