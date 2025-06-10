import { Grid } from "@mui/material";
import Menu from "../../components/Menu";
import Container from "./templates/Container";
import ModalCreateUpdate from "./templates/ModalCreateUpdate";
import useModals from "./hooks/useModals";
import useFields from "./hooks/useFields";
import Toast from "../../components/Toast";

export default function Clients(){
    const { modalVisible, handleModal } = useModals();
    const { fieldsData, handleChange } = useFields();
    return (
        <Grid sx={{display: "flex", flexDirection: "row"}}>
            <Menu/>
            <Container handleModal={handleModal}/>
            <ModalCreateUpdate
                visible={modalVisible}
                handleModal={handleModal}
                fieldsData={fieldsData}
                handleChange={handleChange}
            />
            <Toast text="Logado com sucesso!" severity="success" variant="filled"/>
        </Grid>
    )
}